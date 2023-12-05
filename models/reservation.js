const { Schema, model, Types } = require("mongoose");

const ReservationSchema = new Schema(
  {
    member: { type: Types.ObjectId, required: true, ref: "Member" }, // 예약한 Guest
    house: { type: Types.ObjectId, required: true, ref: "House" }, // 예약한 숙소
    checkin: { type: Date, required: true }, // 체크인 Date
    checkout: { type: Date, required: true }, // 체크아웃 Date
    numOfGuest: Number, // 예약 인원 수
    charge: Number, // 총 요금
    comment: { type: Types.ObjectId, required: false, ref: "Comment" }, // 작성된 리뷰
  },
  { timestamp: true }
);

const Reservation = model("Reservation", ReservationSchema);

module.exports = { Reservation };
