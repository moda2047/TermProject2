const { ConvenienceTypes } = require("../types/convenienceTypes");
const { Schema, model, Types } = require("mongoose");

const categories = Object.values(ConvenienceTypes);

const ConvenienceSchema = new Schema({
  house: { type: Types.ObjectId, required: true, ref: "House" }, // 숙소 Object ID
  category: [{ type: String, enum: categories }], // 카테고리
});

const Convenience = model("Convenience", ConvenienceSchema);

module.exports = { Convenience };
