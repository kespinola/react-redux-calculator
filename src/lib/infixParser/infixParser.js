import * as constants from '../../constants/constants';

export default function parseInfix(infix) {

  var postfix = [];
  var operatorStack = [];

  function pushOperator(op) {
    operatorStack.forEach(operator => {
      // compare priority
      if (operator[2] >= op[2]) {
        postfix.push(operatorStack.pop()); 
      } 
    });
    operatorStack.push(op);
  }

  infix.forEach(token => {

    switch (token[1]) {

      case constants.NUMBER:
        postfix.push(token);
        break;

      case constants.ADD:
      case constants.SUBTRACT:
      case constants.MULTIPLY:
      case constants.DIVIDE:
        pushOperator(token);
        break;

      default:
        break;
    }
  });

  while (operatorStack.length > 0) {
    postfix.push(operatorStack.pop()); 
  }

  return postfix; 
}
