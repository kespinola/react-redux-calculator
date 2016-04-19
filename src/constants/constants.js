export const NUMBER = 'NUMBER';
export const OPEN_PAREN = 'OPEN_PAREN';
export const CLOSE_PAREN = 'CLOSE_PAREN';
export const ADD = 'ADD';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const SUBTRACT = 'SUBTRACT';
export const NUMBER_PRIORITY = -1;
export const OPEN_PAREN_PRIORITY = -1;
export const CLOSE_PAREN_PRIORITY = -1;
export const ADD_PRIORITY = 2;
export const SUBTRACT_PRIORITY = 2;
export const MULTIPLY_PRIORITY = 3;
export const DIVIDE_PRIORITY = 3;
export const OPEN_PAREN_OP = '(';
export const CLOSE_PAREN_OP = ')';
export const ADD_OP = '+';
export const SUBTRACT_OP = '-';
export const MULTIPLY_OP = 'x';
export const DIVIDE_OP = '/';
export const MATCHERS = [
  [/^\.\d+/, NUMBER, NUMBER_PRIORITY],
  [/^\d+(?:\.\d+)?/, NUMBER, NUMBER_PRIORITY],
  [/^\+/, ADD, ADD_PRIORITY],
  [/^-/, SUBTRACT, SUBTRACT_PRIORITY],
  [/^x/, MULTIPLY, MULTIPLY_PRIORITY],
  [/^\//, DIVIDE, DIVIDE_PRIORITY],
  [/^\(/, OPEN_PAREN, OPEN_PAREN_PRIORITY],
  [/^\)/, CLOSE_PAREN, CLOSE_PAREN_PRIORITY]
];
