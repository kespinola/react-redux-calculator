import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './calculator.css';
import Button from '../Button/Button'; 
import AppendButton from '../Button/AppendButton';
import NotImplementedButton from '../Button/NotImplementedButton';
import { calculateExpression, resetCalculator } from '../../flux/actionCreators';

class Calculator extends React.Component {

  render() {
  
    return (
      <article className={styles.wrapper}>
        <input readOnly className={styles.input} value={this.props.displayText}/>
        <section className={styles.key_pad}>
          <AppendButton label='7'/>
          <AppendButton label='8'/>
          <AppendButton label='9'/>
          <AppendButton label='/'/>
          <NotImplementedButton label='%'/>
          <AppendButton label='4'/>
          <AppendButton label='5'/>
          <AppendButton label='6'/>
          <AppendButton label='x'/>
          <NotImplementedButton label='1/x'/>
          <AppendButton label='1'/>
          <AppendButton label='2'/>
          <AppendButton label='3'/>
          <AppendButton label='-'/>
          <div className={styles.equal_key_wrap}>
            <Button label='=' keyType='equal_key' onClick={() => {
              this.props.calculateExpression(); 
            }}/>
          </div>
          <AppendButton label='0'/>
          <AppendButton label='.'/>
          <Button label='clear' onClick={() => {
            this.props.resetCalculator(); 
          }}/>
          <AppendButton label='+'/>
        </section>
      </article>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    calculateExpression,
    resetCalculator
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    displayText: state.value || state.expression || '0'
  };
}

export const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);
