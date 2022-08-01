import React from 'react';
import styled, { css } from 'styled-components';
import { SmoothAnimation } from '../style/common';

const InputBlock = styled.div`
  box-sizing: border-box;
  border: 1px solid #333;
  border-radius: 4px;
  transition: all 0.2s;

  ${(props: InputBoxProps) =>
    props.inline &&
    css`
      display: inline-block;
      width: 120px;
      margin: 2px 4px;
    `}

  input {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #666;
    border: 0;
    border-radius: 4px;
  }

  &.error {
    border: 1px solid #ce2c2c;
  }
`;

const ErrorMessage = styled.div`
  color: #ce2c2c;
  font-size: 12px;
  padding: 5px 10px 15px;
  ${SmoothAnimation}
`;

type InputBoxProps = {
  error?: string | null;
  value?: string;
  placeholder?: string;
  inline?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const InputBox: React.FC<InputBoxProps> = ({
  error,
  value,
  placeholder,
  inline,
  onChange,
  onKeyDown,
}) => {
  return (
    <>
      <InputBlock className={`${error && 'error'}`} inline={inline}>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          placeholder={placeholder}
          autoComplete="off"
        />
      </InputBlock>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default InputBox;
