import React, { PropTypes } from 'react'
import styles from './calculator.css';
import Key from './../Key';

const Calculator = ({ incrementDisplay, changeOperator, display }) => {
  return (
      <article className={styles.wrapper}>
        <input className={styles.input} readOnly value={display} />
        <section className={styles.key_pad}>
          <Key onClick={incrementDisplay} value="7" />
          <Key onClick={incrementDisplay} value="8" />
          <Key onClick={incrementDisplay} value="9" />
          <Key onClick={changeOperator} value="÷" />
          <Key value="%" />
          <Key onClick={incrementDisplay} value="4" />
          <Key onClick={incrementDisplay} value="5" />
          <Key onClick={incrementDisplay} value="6" />
          <Key onClick={changeOperator} value="x" />
          <Key value="1/x" />
          <Key onClick={incrementDisplay} value="1" />
          <Key onClick={incrementDisplay} value="2" />
          <Key onClick={incrementDisplay} value="3" />
          <Key onClick={changeOperator} value="-" />
          <div className={styles.equal_key_wrap}>
            <Key type="equal_key" value="=" />
          </div>
          <Key onClick={incrementDisplay} value="0" />
          <Key onClick={incrementDisplay} value="." />
          <Key type="clear_key" value="clear" />
          <Key onClick={changeOperator} value="+" />
        </section>
      </article>
  );
};

Calculator.propTypes = {
  incrementDisplay: PropTypes.func,
  display: PropTypes.string,
};

Calculator.defaultProps = {
  updateResult: () => {},
  display: '0',
};

export default Calculator;
