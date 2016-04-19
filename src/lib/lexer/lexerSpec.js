import { expect } from 'chai';
import lex from './lexer';
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

describe('lexer', () => {

  it('throws with an illegal token', () => {
    expect(() => lex('3&4')).to.throw;
  });

  it('lexes simple addition operation', () => {
    expect(lex('3+4')).to.eql([
      getNumber(3),
      addition(),
      getNumber(4)
    ]);
  });

  it('lexes simple multiplication operation', () => {
    expect(lex('3x4.47')).to.eql([
      getNumber(3),
      multiplication(),
      getNumber(4.47)
    ]);
  });

  it('lexes simple division operation', () => {
    expect(lex('84.23/34.232')).to.eql([
      getNumber(84.23),
      division(),
      getNumber(34.232)
    ]);
  });

  it('lexes simple subtraction expression', () => {
    expect(lex('34-5')).to.eql([
      getNumber(34),
      subtraction(),
      getNumber(5)
    ]);
  });

  it('lexes complex expression', () => {
    expect(lex('8.75-24.91/4x37')).to.eql([
      getNumber(8.75),
      subtraction(),
      getNumber(24.91),
      division(),
      getNumber(4),
      multiplication(),
      getNumber(37)
    ]);
  });

  it('lexes expression with parenthesis', () => {
    expect(lex('27(2-3x47)')).to.eql([
      getNumber(27),
      openParen(),
      getNumber(2),
      subtraction(),
      getNumber(3),
      multiplication(),
      getNumber(47),
      closeParen()
    ]);
  });

  it('lexes decimal numbers with or without whole number', () => {
    expect(lex('12.2+.2')).to.eql([
      getNumber(12.2),
      addition(),
      getNumber('.2')
    ]);
  });
});
