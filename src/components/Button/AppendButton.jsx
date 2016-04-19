import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onExpressionAppend } from '../../flux/actionCreators';
import Button from './Button';

class AppendButton extends React.Component {
  render () {
    return (
      <Button label={this.props.label} onClick={() => {
        this.props.onClick(this.props.label); 
      }}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClick: onExpressionAppend
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(AppendButton);
