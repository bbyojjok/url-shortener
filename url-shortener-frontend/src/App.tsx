import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import StatPage from './pages/StatPage';
import DocsPage from './pages/DocsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} timeout={200} classNames="page">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
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
