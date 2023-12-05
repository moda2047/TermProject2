const OrderTypes = {
  PRICE: "PRICE", // 가격 기준 내림차순 정렬
  SCORE: "SCORE", // 별점 기준 내림차순 정렬
};

Object.freeze(OrderTypes);

module.exports = { OrderTypes };
