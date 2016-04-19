import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onExpressionAppend } from '../../flux/actionCreators';
import Button from './Button';

export default class NotImplementedButton extends React.Component {
  render () {
    return (
      <Button label={this.props.label} onClick={() => {
        alert('This key has not been implemented');
      }}/>
    );
  }
}
