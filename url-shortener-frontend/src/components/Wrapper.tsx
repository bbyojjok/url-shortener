import React from 'react';
import styled from 'styled-components';

type WrapperProps = {
  children: React.ReactNode;
};

const WrapperBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  padding: 20px 20px 40px;
`;

const Wrapper = ({ children }: WrapperProps) => {
  return <WrapperBlock>{children}</WrapperBlock>;
};

export default Wrapper;
