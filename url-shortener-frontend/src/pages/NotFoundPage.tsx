import Wrapper from '../components/Wrapper';
import MessageBox from '../components/MessageBox';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <MessageBox>
        <p>
          Something's wrong here
          <br />
          couldn't find a link
        </p>
        <Button to="/">Go url-shortener</Button>
      </MessageBox>
    </Wrapper>
  );
};

export default NotFoundPage;
