import React from 'react';

import { StyledCustomButton } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <StyledCustomButton {...props}>{children}</StyledCustomButton>
);
export default CustomButton;
