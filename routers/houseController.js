const { Router } = require("express");
const { Member, House } = require("../models");
const { isValidObjectId } = require("mongoose");

const houseRouter = Router();

houseRouter.get("/", async (req, res) => {
  const { checkin, checkout, numOfGuest, houseType, orderType } = req.query;

  try {
    const houses = await House.find({});
    res.send({ houses });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = houseRouter;
