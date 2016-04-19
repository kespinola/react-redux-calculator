import { expect } from 'chai';
import postfixEvaluator from './postfixEvaluator';
import * as constants from '../../constants/constants';
import { 
  getNumber, 
  addition,
  subtraction,
  multiplication,
  division,
  openParen,
  closeParen
} from '../../../test/testUtility';

describe('postfixEvaluator', () => {
  
  it('evaluates simple postfix addition expression', () => {
    expect(postfixEvaluator([
      getNumber(3),
      getNumber(4),
      addition()
    ])).to.equal('7.00');
  });

  it('evaluates simple postfix subtraction expression', () => {
    expect(postfixEvaluator([
      getNumber(10),
      getNumber(20),
      subtraction()
    ])).to.equal('-10.00');
  });

  it('evaluates expressions containing decimals', () => {
    expect(postfixEvaluator([
      getNumber(12.2),
      getNumber(.2),
      addition()
    ])).to.equal('12.40'); 
  });
});
