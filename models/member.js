const mongoose = require("mongoose");
const { Schema } = mongoose;
const { MemberTypes } = require("../types/memberTypes");

const MemberSchema = new Schema(
  {
    name: { type: String, required: true }, // 이름
    age: Number, // 나이
    memberType: { type: String, enum: MemberTypes }, // 멤버 타입
  },
  { timestamps: true }
);

MemberSchema.virtual("reservations", {
  ref: "Reservation",
  localField: "_id",
  foreignField: "member",
});

MemberSchema.set("toObject", { virtuals: true });
MemberSchema.set("toJSON", { virtuals: true });

const Member = mongoose.model("Member", MemberSchema);

module.exports = { Member };
