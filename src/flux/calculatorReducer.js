import * as actionTypes from './actionTypeConstants';
import lex from '../lib/lexer/lexer';
import parseInfix from '../lib/infixParser/infixParser';
import postfixEvaluator from '../lib/postfixEvaluator/postfixEvaluator';

function getInitialState() {
  return {
    value: 0,
    expression: ''
  }
}

export default function calculatorReducer(state = getInitialState(), action) {

  switch(action.type) {
    case actionTypes.GET_INITIAL_STATE:
      return getInitialState();

    case actionTypes.EXPRESSION_APPEND:
      return Object.assign({}, state, {
        expression: state.expression += action.toAppend
      });

    case actionTypes.CALCULATE_EXPRESSION:
      return Object.assign({}, state, {
        value: postfixEvaluator(parseInfix(lex(state.expression)))
      });

    case actionTypes.RESET_CALCULATOR:
      return getInitialState();

    default:
      return state;
  }
}

