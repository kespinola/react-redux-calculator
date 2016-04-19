import * as constants from '../src/constants/constants';

export function getNumber(n) {
  return [n.toString(), constants.NUMBER, constants.NUMBER_PRIORITY];
}

export function addition() {
  return [constants.ADD_OP, constants.ADD, constants.ADD_PRIORITY];
}

export function subtraction() {
  return [constants.SUBTRACT_OP, constants.SUBTRACT, constants.SUBTRACT_PRIORITY];
}

export function multiplication() {
  return [constants.MULTIPLY_OP, constants.MULTIPLY, constants.MULTIPLY_PRIORITY];
}

export function division() {
  return [constants.DIVIDE_OP, constants.DIVIDE, constants.DIVIDE_PRIORITY];
}

export function openParen() {
  return [constants.OPEN_PAREN_OP, constants.OPEN_PAREN, constants.OPEN_PAREN_PRIORITY];
}

export function closeParen() {
  return [constants.CLOSE_PAREN_OP, constants.CLOSE_PAREN, constants.CLOSE_PAREN_PRIORITY];
}
