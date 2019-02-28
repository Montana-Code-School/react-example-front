import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Styled components common to the whole code base
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export const ArrowDiv = styled.div`
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  border: solid black;
  border-width: 0 3px 3px 0;
  padding: 3px;
  margin: 0 auto;
  ${props => props.down && css`
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  `}
  ${props => props.right && css`
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  `}
  ${props => props.up && css`
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  `}
  ${props => props.left && css`
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  `}
`

ArrowDiv.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem;
  ${props => props.centered && css`
    justify-content: space-evenly;
    align-items: center;
  `}
`

export const FlexLineBreak = styled.div`
  flex-basis: 100%;
  width: 0px; 
  height: 0px; 
  overflow: hidden;
`

export const ExampleDiv = styled.div`
  text-align: center;
  width: 30vw;
  height: 20vh;
  margin: 0rem 0rem 0.8rem 0.3rem;
  border-radius: 2px;
  background-color: lightseagreen;
`