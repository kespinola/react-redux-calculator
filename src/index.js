import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator';
import initializeStore from './flux/store';
let store = initializeStore();

document.addEventListener('DOMContentLoaded', () => {
  render((
    <Provider store={store}>
      <Calculator />
    </Provider>
  ), document.getElementById('root'));
});
