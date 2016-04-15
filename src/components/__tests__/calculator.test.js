import { describe, it } from 'mocha';
import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Calculator from './../Calculator';

describe('<Calculator />', () => {
  it('renders 19 buttons', () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper.find('button')).to.have.length(19);
  });
});
