import styled from 'styled-components';
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
      <Docs />
      <ButtonBoxBlock>
        <Button to="/">Go url-shortener</Button>
      </ButtonBoxBlock>
    </Wrapper>
  );
};

export default DocsPage;
