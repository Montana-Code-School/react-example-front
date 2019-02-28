import React from 'react';
import PropTypes from 'prop-types';

import {
  ExampleDiv
} from '../common'

// functional component
function FunctionalCompExample({ title, content }) {
  return (
    <ExampleDiv>
      <h2>{(title.charAt(0).toUpperCase() + title.slice(1))}</h2>
      <p>{content}</p>
    </ExampleDiv>
  );
}

// PropTypes
FunctionalCompExample.prototypes = {
  title: PropTypes.string.isRequired
}

export default FunctionalCompExample;
