import * as constants from '../../constants/constants';

export default function lex(expr) {

  var tokens = [];

  while (expr.length > 0) {

    var prevExpr = expr;

    constants.MATCHERS.forEach((matcher) => {

      var [re, type, priority] = matcher;
      var match = expr.match(re);

      if (match) {
        tokens.push([match[0], type, priority]);
        expr = expr.slice(match[0].length);
        return false;
      }
    });

    if (expr === prevExpr){
      throw new Error('Illegal token found at ' + expr);
    }
  }

  return tokens;
}
