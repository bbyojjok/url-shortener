import { Helmet } from 'react-helmet-async';
import Wrapper from '../components/Wrapper';
import ShortUrlContainer from '../containers/ShortUrlContainer';

const HomePage = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Home | URL-SHORTENER</title>
      </Helmet>
      <ShortUrlContainer />
    </Wrapper>
  );
};

export default HomePage;
