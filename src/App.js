import React, { Component } from 'react';
import uuid from 'uuid'

import FunctionalCompExample from './components/FunctionalCompExample'
import RegularComponentExample from './components/RegularComponentExample'

import {
  ArrowDiv,
  FlexWrapper,
  FlexLineBreak
} from './common'

class App extends Component {
  state = {
    example : "thing",
    manyExamples: [],
    debug: false,
  }
  render() {
    return (
      <div className="App">
        {/* Component with props set individually */}
        <RegularComponentExample 
          headerText={'Hello World'} 
          debug={this.state.debug} 
        />
        <FlexWrapper centered>
          {/* Components with props set through spread */}
          {this.state.manyExamples.map(
            example => 
              <FunctionalCompExample 
                {...example} 
              />
          )}
          <FlexLineBreak />
          <ArrowDiv down height={40} width={40}/> 
        </FlexWrapper>
      </div>
    );
  }
}

export default App;
