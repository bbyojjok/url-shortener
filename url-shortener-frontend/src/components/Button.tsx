import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  fullWidth?: boolean;
  onClick?: () => void;
};

const buttonStyle = css`
  display: inline-block;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  text-align: center;
  background: #3f72af;
  transition: all 0.2s;

  ${(props: ButtonProps) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  &:hover {
    background: #295b99;
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
