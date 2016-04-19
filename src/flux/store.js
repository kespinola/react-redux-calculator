import { createStore } from 'redux';
import calculator from './calculatorReducer';

export default function initializeStore(initialState) {
  return createStore(calculator);
}
