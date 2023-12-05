const { Schema, model, Types } = require("mongoose");

const CommentSchema = new Schema({
  member: { type: Types.ObjectId, required: true, ref: "Member" }, // 작성한 Guest
  house: { type: Types.ObjectId, required: true, ref: "House" }, // 대상 숙소
  content: { type: String, required: true }, // 리뷰 내용
  score: { type: Number, required: true }, // 리뷰 점수
});

const Comment = model("Comment", CommentSchema);

module.exports = { Comment };
