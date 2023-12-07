const { Schema, model, Types } = require("mongoose");

const HouseCalendarSchema = new Schema(
  {
    house: { type: Types.ObjectId, required: true, ref: "House" }, // 숙소 Object ID
    date: { type: Date, required: true },
    remain: { type: Number, required: true },
  },
  { getters: true }
);

const HouseCalendar = model("HouseCalendar", HouseCalendarSchema);

module.exports = { HouseCalendar };
