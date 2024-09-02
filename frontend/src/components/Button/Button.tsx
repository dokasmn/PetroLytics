import React from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  $primary?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ $primary, children }) => {
  return <StyledButton $primary={$primary}>{children}</StyledButton>;
};

export default Button;

