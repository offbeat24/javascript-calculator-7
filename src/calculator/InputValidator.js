import { ERROR_MESSAGE } from "../constants/Messages.js";

class InputValidator {
  static validateNumbers(numbers) {
    for (const num of numbers) {
      if (isNaN(num)) {
        throw new Error(ERROR_MESSAGE.INVALID_INPUT);
      }

      // 음수 값이 있으면 에러
      if (parseInt(num, 10) < 0) {
        throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
      }
    }
  }

  // 연속된 구분자를 검증하는 함수
  static validateConsecutiveDelimiters(input, delimiters) {
    const delimiterRegex = new RegExp(`[${delimiters.join("")}]{2,}`);
    if (delimiterRegex.test(input)) {
      throw new Error(ERROR_MESSAGE.CONSECUTIVE_DELIMITERS);
    }
  }
}

export default InputValidator;
