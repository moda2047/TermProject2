const ConvenienceTypes = {
  TOILET_PAPER: "TOILET_PAPER", // 화장지
  SOAP: "SOAP", // 손과 몸을 씻을 수 있는 비누
  GUEST_TOWEL: "GUEST_TOWEL", // 게스트당 수건 1장
  BEDDING: "BEDDING", // 침대당 침구 1세트
  PILLOW: "PILLOW", // 게스트당 베개 1개
  CLEANING_SUPPLIES: "CLEANING_SUPPLIES", // 청소용품
  POOL: "POOL", // 수영장
  WIFI: "WIFI", // 와이파이
  KITCHEN: "KITCHEN", // 주방
  FREE_PARKING: "FREE_PARKING", // 무료 주차 공간
  JACUZZI: "JACUZZI", // 자쿠지
  LAUNDRY: "LAUNDRY", // 세탁기 또는 건조기
  AIR_CONDITIONING: "AIR_CONDITIONING", // 에어컨 또는 난방
  SELF_CHECK_IN: "SELF_CHECK_IN", // 셀프 체크인
  WORKSPACE: "WORKSPACE", // 노트북 작업 공간
  PET_FRIENDLY: "PET_FRIENDLY", // 반려동물 동반 가능
  CO_ALARM: "CO_ALARM", // 일산화탄소 경보기
  FIRE_ALARM: "FIRE_ALARM", // 화재 경보기
  FIRE_EXTINGUISHER: "FIRE_EXTINGUISHER", // 소화기
  FIRST_AID_KIT: "FIRST_AID_KIT", // 구급상자
  EMERGENCY_EXIT: "EMERGENCY_EXIT", // 비상 대피 안내도 및 현지 응급 구조기관 번호
  NO_STAIRS: "NO_STAIRS", // 계단이나 단차가 없는 현관
  WIDE_ENTRANCE: "WIDE_ENTRANCE", // 폭 32인치/81cm 이상의 넓은 출입구
  WIDE_CORRIDOR: "WIDE_CORRIDOR", // 폭 36인치/91cm 이상의 넓은 복도
  WHEELCHAIR_ACCESSIBLE_BATHROOM: "WHEELCHAIR_ACCESSIBLE_BATHROOM", // 휠체어 접근 가능 욕실
};

Object.freeze(ConvenienceTypes);

module.exports = { ConvenienceTypes };
