import { expect } from 'chai';
import calculatorReducer from './calculatorReducer';
import * as actionTypes from './actionTypeConstants';
import * as actionCreators from './actionCreators';

describe('calculatorReducer', () => {

  it('gets the initial state', () => {
    let initialState = calculatorReducer({}, actionCreators.getInitialState());
    expect(initialState).to.eql({
      value: 0,
      expression: ''
    });
  });

  it('stores a number in the expression', () => {
    let initialState = calculatorReducer({}, actionCreators.getInitialState());
    let nextState = calculatorReducer(initialState, actionCreators.onExpressionAppend(2));
    expect(nextState).to.eql({
      value: 0,
      expression: '2'
    });
  });

  it('stores a sequence of operand characters', () => {
    let initialState = calculatorReducer({}, actionCreators.getInitialState());
    let nextState = [
      actionCreators.onExpressionAppend(2),
      actionCreators.onExpressionAppend(3),
      actionCreators.onExpressionAppend(9)
    ].reduce((previous, next) => {
      return calculatorReducer(previous, next);
    }, initialState);

    expect(nextState.expression).to.equal('239');
  });

  // tests integration with lexer/parser
  it('calculates an expression', () => {
    let initialState = calculatorReducer({}, actionCreators.getInitialState()); 
    let nextState = [
      actionCreators.onExpressionAppend(2),
      actionCreators.onExpressionAppend(3),
      actionCreators.onExpressionAppend(9),
      actionCreators.onExpressionAppend('+'),
      actionCreators.onExpressionAppend(1),
      actionCreators.onExpressionAppend(0),
      actionCreators.calculateExpression()
    ].reduce((previous, next) => {
      return calculatorReducer(previous, next); 
    }, initialState);

    expect(nextState.value).to.equal('249.00');
  });
});
