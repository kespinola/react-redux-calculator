import { expect } from 'chai';
import parseInfix from './infixParser';
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

describe('infixParser', () => {

  it('converts simple addition expression from infix to postfix', () => {
    expect(parseInfix([
      getNumber(3),
      addition(),
      getNumber(4)
    ])).to.eql([
      getNumber(3),
      getNumber(4),
      addition()
    ]);
  });

  it('accounts for multiplication operator precedence', () => {
    expect(parseInfix([
      getNumber(3),
      addition(),
      getNumber(4),
      multiplication(),
      getNumber(27)
    ])).to.eql([
      getNumber(3),
      getNumber(4),
      getNumber(27),
      multiplication(),
      addition()
    ]);
  });
});
