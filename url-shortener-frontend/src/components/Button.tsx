import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  fullWidth?: boolean;
};

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  text-align: center;

  background: #333;
  &:hover {
    background: #444;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button: React.FC<ButtonProps> = (props) => {
  return props.to ? (
    <StyledLink to={props.to}>{props.children}</StyledLink>
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
