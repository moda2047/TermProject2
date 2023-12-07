const { Router } = require("express");
const { Member, House, Reservation, HouseCalendar } = require("../models");
const { isValidObjectId } = require("mongoose");
const _ = require("lodash");
const { OrderTypes } = require("../types/orderTypes");
const { HouseTypes } = require("../types/houseTypes");

const houseRouter = Router();

// 총 숙박 요금 계산 (금, 토, 일을 주말로 계산)
const calcCharge = (house, checkin, checkout) => {
  const days = checkout.getUTCDate() - checkin.getUTCDate();
  let totalCharge = 0;
  let checkinDay = checkin.getUTCDay();
  for (let i = 0; i < days; i++, checkinDay++) {
    const day = checkinDay % 7;
    if (day > 4 || day === 0) totalCharge += house.charge.weekend;
    else totalCharge += house.charge.weekday;
  }

  return totalCharge;
};

houseRouter.get("/", async (req, res) => {
  const { checkin, checkout, numOfGuest, houseType, orderType } = req.query;

  try {
    const foundHouses = await House.find({
      houseType,
      capacity: { $gte: numOfGuest },
    })
      .sort(orderType === OrderTypes.SCORE ? { avgScore: "desc" } : {})
      .populate({
        path: "houseCalendar",
        match: {
          $and: [{ date: { $gte: checkin } }, { date: { $lt: checkout } }],
        },
      });

    const toRemove = [];

    for (let i = 0; i < foundHouses.length; i++) {
      if (_.isEmpty(foundHouses[i].houseCalendar)) continue;
      for (const foundDay of foundHouses[i].houseCalendar) {
        if (foundDay.remain < Number(numOfGuest)) {
          toRemove.push(i);
          break;
        }
      }
    }

    for (let i = toRemove.length - 1; i >= 0; i--) {
      foundHouses.splice(i, 1);
    }

    const addedTotalChargeHouses = foundHouses.map((house) => {
      const totalCharge = calcCharge(
        house,
        new Date(checkin),
        new Date(checkout)
      );
      return { ...house.toJSON(), totalCharge };
    });

    if (orderType === OrderTypes.PRICE)
      addedTotalChargeHouses.sort((a, b) => b.totalCharge - a.totalCharge);

    res.send({ addedTotalChargeHouses });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

houseRouter.get("/detail", async (req, res) => {
  const { houseId, month } = req.query;
  const now = new Date(Date.now());
  const startOfMonth = new Date(now.getUTCFullYear(), Number(month) - 1, 1);
  const startOfNextMonth = new Date(now.getUTCFullYear(), Number(month), 1);

  try {
    const foundHouse = await House.findById(houseId)
      .populate({ path: "conveniences", select: "category" })
      .populate({
        path: "comments",
        populate: { path: "member", select: "name" },
      })
      .populate({
        path: "houseCalendar",
        match: {
          $and: [
            { date: { $gte: startOfMonth } },
            { date: { $lt: startOfNextMonth } },
          ],
        },
      });

    res.send({ foundHouse });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = houseRouter;
