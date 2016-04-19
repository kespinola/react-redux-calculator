import React, { PropTypes } from 'react';
import styles from './button.css';

export default class Button extends React.Component {

  static defaultProps = {
    keyType: 'key' 
  };
  
  render() {
    return (
      <button onClick={this.props.onClick} className={styles[this.props.keyType]}>
        {this.props.label}
      </button>
    );
  }
}
