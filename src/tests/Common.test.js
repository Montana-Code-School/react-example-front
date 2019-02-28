import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { expect } from 'chai';
import { shallow, configure } from 'enzyme';

// import sinon from 'sinon';

import {
  FlexWrapper,
  Button,
  FlexLineBreak,
  ArrowDiv
} from '../common'
 
configure({ adapter: new Adapter() });

describe('<ArrowDiv />', () => {
  const height = 30
  const width = 30
  const wrapper = shallow(<ArrowDiv width={width} height={height} />);

  it('should have a width of 30', () => {
    const { width } = wrapper.props()
    expect(width).to.equal(30)
  });

  it('should have a height of 30', () => {
    const { height } = wrapper.props()
    expect(height).to.equal(30)
  });

});
