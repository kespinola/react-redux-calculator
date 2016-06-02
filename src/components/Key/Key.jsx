import React, { PropTypes } from 'react';
import styles from './key.css';

const Key = ({ type, children, onClick, value }) =>
  <button onClick={() => onClick(value)} className={styles[type]}>{value}</button>;

Key.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

Key.defaultProps = {
  type: 'key',
  onClick: () => {},
};

export default Key;
