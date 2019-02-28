import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { expect } from 'chai';
import { shallow, configure, mount } from 'enzyme';

// import sinon from 'sinon';

import App from '../App';
import FunctionalCompExample from '../components/FunctionalCompExample'
import RegularComponentExample from '../components/RegularComponentExample'
import {
  FlexWrapper,
} from '../common'
 
configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders one <FlexWrapper /> common styled component', () => {
    expect(wrapper.find(FlexWrapper)).to.have.length(1);
  });

  it('renders one <FunctionalCompExample /> for each manyExample state', () => {
    // Set state of the app object and check that it renders Func Comps
    wrapper.setState({
      manyExamples: [
        {
          title: "ideas",
          content: "Be like water.",
          key: 1
        },
        {
          title: "thoughts",
          content: "What makes water.",
          key: 2
        },
        {
          title: "actions",
          content: "Change becomes flow.",
          key: 3
        },
      ]
    });
    const { length : exampleManyLength } = wrapper.state().manyExamples
    expect(wrapper.find(FunctionalCompExample)).to.have.length(exampleManyLength);
  });

  it('renders one <RegularComponentExample /> common styled component', () => {
    expect(wrapper.find(RegularComponentExample)).to.have.length(1);
  });
});
