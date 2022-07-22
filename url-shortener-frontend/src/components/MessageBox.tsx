import React from 'react';
import styled from 'styled-components';

type MessageBoxProps = {
  children: React.ReactNode;
};

const MessageBoxBlock = styled.div`
  padding: 40px 0;
  text-align: center;

  p {
    margin-bottom: 40px;
    font-size: 15px;
    line-height: 1.4;
  }
`;

const MessageBox: React.FC<MessageBoxProps> = ({ children }) => {
  return <MessageBoxBlock>{children}</MessageBoxBlock>;
};

export default MessageBox;
