import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// functional component
class RegularComponentExample extends Component {
  componentWillMount() {
    if(this.props.debug) {
      console.log("Component Will Mount")
    }
  }

  componentDidMount() {
    if(this.props.debug) {
      console.log("Component Did Mount")
    }
  }
  
  render () {
    if(this.props.debug) {
      console.log("Rendering happens")
    }
    return (
      <AppHeader>
        <h1>{this.props.headerText}</h1>
      </AppHeader>
    );
  }
}

// PropTypes
RegularComponentExample.prototypes = {
  headerText: PropTypes.string.isRequired
}

const AppHeader = styled.header`
  text-align: center;
  background-color: grey;
  padding: 3rem;
`

export default RegularComponentExample;
