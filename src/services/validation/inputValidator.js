import { constant } from "@/constant/constant";
import { error } from "@/constant/error";

// wishCreate 에서 목표 금액 에러 메세지 생성 함수
function goalAmountValidator(input) {
  input = input.replace(/\s/g, "");
  if (input <= 0) {
    return error.INVALID_NUMBER;
  } else if (0 < input && input < 1000) {
    return error.INVALID_GOAL_AMOUNT;
  }

  //검증 통과
  return true;
}

// wishHistory 에서 금액 데이터 에러 메세지 생성 함수
function amountValidator(input, sumAmount) {
  input = input.replace(/\s/g, "");

  if (input <= 0) {
    return error.INVALID_NUMBER;
  } else if (input > sumAmount) {
    return error.INVALID_AMOUNT;
  } else if (input === "") {
    return error.REQUIRED_FIELD_EMPTY;
  }

  //검증 통과
  return true;
}

// wishCreate 에서 위시제목, 상품 이름, 목표 날짜 에러 메세지 생성 함수
function stringValidator(input, field) {
  input = input.replace(/\s/g, "");

  if (input.length > 80) {
    return error.STRING_LENGTH_EXCEED;
  }

  if (field !== constant.WISH.CONTENT && field.length === 0) {
    return error.REQUIRED_FIELD_EMPTY;
  }
  //검증 통과
  return true;
}
