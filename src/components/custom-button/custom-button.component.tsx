import React, { ButtonHTMLAttributes } from 'react';

import { StyledCustomButton } from './custom-button.styles';

interface CustomButtonProps extends ButtonHTMLAttributes<any> {
  isGoogleSignIn?: boolean;
}

const CustomButton = ({
  children,
  ...props
}: CustomButtonProps): JSX.Element => (
  <StyledCustomButton {...props}>{children}</StyledCustomButton>
);

export default CustomButton;
