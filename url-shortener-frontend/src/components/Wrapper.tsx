import React from 'react';
import styled from 'styled-components';

type WrapperProps = {
  children: React.ReactNode;
};

const WrapperBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  padding: 20px;
`;

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <WrapperBlock>{children}</WrapperBlock>;
};

export default Wrapper;
