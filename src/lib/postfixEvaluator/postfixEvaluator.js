import * as constants from '../../constants/constants';

export default function postfixEvaluator(postfix) {

  var result = [];

  postfix.forEach(token => {

      let tokenType = token[1];

      if (tokenType === constants.NUMBER) {
        result.push(token[0]);
        return;
      }

      var n = result.pop();
      var m = result.pop();

      switch(tokenType) {

        case constants.ADD:
          result.push((parseFloat(n) + parseFloat(m)).toFixed(2));
          break;

        case constants.SUBTRACT:
          result.push((parseFloat(m) - parseFloat(n)).toFixed(2));
          break;

        case constants.MULTIPLY:
          result.push((parseFloat(n) * parseFloat(m)).toFixed(2));
          break;

        case constants.DIVIDE:
          result.push((parseFloat(m) / parseFloat(n)).toFixed(2));
          break;
      }
  });

  return result.pop();
}
