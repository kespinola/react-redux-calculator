import * as actionTypes from './actionTypeConstants';

export function getInitialState() {
  return {
    type: actionTypes.GET_INITIAL_STATE 
  };
}

export function onExpressionAppend(toAppend) {
  return {
    toAppend,
    type: actionTypes.EXPRESSION_APPEND
  };
}

export function calculateExpression() {
  return {
    type: actionTypes.CALCULATE_EXPRESSION 
  };
}

export function onEqual() {
  return {
    type: actionTypes.ON_EQUAL 
  };
}

export function resetCalculator() {
  return {
    type: actionTypes.RESET_CALCULATOR 
  };
}
