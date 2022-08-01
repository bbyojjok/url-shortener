import { Helmet } from 'react-helmet-async';
import Wrapper from '../components/Wrapper';
import StatContainer from '../containers/StatContainer';

const StatPage = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Stat | URL-SHORTENER</title>
      </Helmet>
      <StatContainer />
    </Wrapper>
  );
};

export default StatPage;
