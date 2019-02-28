import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import uuid from 'uuid'

import { expect } from 'chai';
import { shallow, configure } from 'enzyme';

// import sinon from 'sinon';

import FunctionalCompExample from '../components/FunctionalCompExample'
import {
  ExampleDiv
} from '../common' 

configure({ adapter: new Adapter() });

describe('<FunctionalCompExample />', () => {
  const wrapper = shallow(<FunctionalCompExample title={"hello"} content={"world"} />);
  it('should render one <ExampleDiv /> common styled component', () => {
    expect(wrapper.find(ExampleDiv)).to.have.length(1);
  });

  it('should Title case title props', () => {
    expect(wrapper.find('h2').text()).to.equal("Hello");
  });

  it('should display content in a p tag', () => {
    expect(wrapper.find('p').text()).to.equal("world");
  });

});
