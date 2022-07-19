import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import MessageBox from '../components/MessageBox';
import Button from '../components/Button';

const BtnBackBlock = styled(Link)`
  display: inline-block;
  padding: 8px;
  color: #fff;
  background-color: #333;
  border-radius: 5px;
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      {/* <div> */}
      <MessageBox>
        Something's wrong here
        <br />
        couldn't find a link
      </MessageBox>
      <Button fullWidth>TEst</Button>
      <br />
      <br />
      <br />

      <BtnBackBlock to="/">Go shortenUrl</BtnBackBlock>
      <br />
      <br />
      <br />

      <Button to="/">Go shortenUrl</Button>
      <br />
      <br />
      <br />

      <Button to="/">풀위드 버튼</Button>
    </Wrapper>
  );
};

export default NotFoundPage;
