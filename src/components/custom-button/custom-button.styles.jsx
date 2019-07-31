import styled, { css } from 'styled-components';

const invertedButtonStyle = css`
  filter: invert(100%);
`;

const googleButtonStyle = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
    color: #fff;
    border: none;
  }
`;

const getCustomStyles = ({ isGoogleSignIn, inverted }) => {
  if (isGoogleSignIn) return googleButtonStyle;
  if (inverted) return invertedButtonStyle;
};

export const StyledCustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  ${getCustomStyles}
`;
