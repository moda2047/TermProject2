const { HouseTypes } = require("../types/houseTypes");
const { Schema, model, Types } = require("mongoose");

const HouseSchema = new Schema(
  {
    name: String, // 숙소 이름
    member: { type: Types.ObjectId, required: true, ref: "Member" }, // HOST Object ID
    // 숙소 주소
    address: {
      city: String,
      street: String,
      zipCode: String,
    },
    charge: { weekday: Number, weekend: Number }, // 요금
    capacity: Number, // 수용 인원 수
    houseType: { type: String, enum: HouseTypes }, // 숙소 타입
    numOfBath: Number, // 화장실 수
    avgScore: Number, // 평균 평점
    // 편의시설
    conveniences: { type: Types.ObjectId, required: false, ref: "Convenience" },
  },
  { timestamp: true }
);

HouseSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "House",
});
HouseSchema.virtual("reservations", {
  ref: "Reservation",
  localField: "_id",
  foreignField: "House",
});

HouseSchema.set("toObject", { virtuals: true });
HouseSchema.set("toJSON", { virtuals: true });

const House = model("House", HouseSchema);

module.exports = { House };
