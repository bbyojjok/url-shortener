import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import ShortUrlPage from './pages/ShortUrlPage';
import StatPage from './pages/StatPage';
import DocsPage from './pages/DocsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>URL-SHORTENER</title>
      </Helmet>
      <Header />
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} timeout={200} classNames="page">
          <Routes location={location}>
            <Route path="/" element={<ShortUrlPage />} />
            <Route path="/stat" element={<StatPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
