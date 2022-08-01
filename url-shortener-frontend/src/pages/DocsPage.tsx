import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Wrapper from '../components/Wrapper';
import Docs from '../components/Docs';
import Button from '../components/Button';

const ButtonBoxBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const DocsPage = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Docs | URL-SHORTENER</title>
      </Helmet>
      <Docs />
      <ButtonBoxBlock>
        <Button to="/">Go url-shortener</Button>
      </ButtonBoxBlock>
    </Wrapper>
  );
};

export default DocsPage;
