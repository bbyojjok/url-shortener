import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StatPage from './pages/StatPage';
import DocsPage from './pages/DocsPage';

import './App.css';

const Contents = () => {
  return (
    <div id="contents">
      <div className="urlBoxWrap">
        <div id="urlInputBox">
          <input id="url" type="text" placeholder="Paste link or url to input" />
        </div>
        <button id="btnCreateUrl">Create</button>
        <div id="createdUrl">
          <a
            id="shortUrl"
            href="http://url.hdmall.com/DfslkSq_o"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>http://url.hdmall.com/DfslkSq_o</span>
          </a>
          <button id="btnCopyUrl">Copy</button>
          <div className="qrcode">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31">
              <path d="M1 1h7v7h-7zM9 1h1v1h1v1h-2zM12 1h1v2h2v-1h1v-1h2v1h-1v2h-4v1h-1v1h1v-1h2v1h-1v2h-1v-1h-1v1h1v1h-2v-2h-1v-2h-1v-1h2v-1h1zM19 1h1v2h-2v-1h1zM21 1h1v1h-1zM23 1h7v7h-7zM2 2v5h5v-5zM24 2v5h5v-5zM3 3h3v3h-3zM21 3h1v1h-1zM25 3h3v3h-3zM17 4h2v2h1v-2h1v1h1v3h-1v-1h-1v1h-1v-1h-1v-2h-1zM15 6h1v4h-2v-2h1zM9 7h1v2h-1zM17 7h1v1h-1zM18 8h1v1h1v1h-2v1h-1v2h-3v1h-3v1h-1v-1h-4v-2h1v1h1v-1h-1v-1h2v1h1v1h3v-1h-1v-2h1v1h1v1h1v-1h1v-1h1v-1h1zM1 9h1v2h-1zM3 9h2v1h-2zM6 9h3v1h-3zM10 9h1v2h-1zM23 9h1v1h2v1h-1v1h-1v-1h-1v1h-1v-1h-2v-1h3zM26 9h1v1h-1zM28 9h2v2h-1v-1h-1zM3 11h1v1h-1zM27 11h2v1h-2zM2 12h1v2h-1zM19 12h1v1h-1zM21 12h1v1h-1zM23 12h1v1h-1zM25 12h2v1h1v1h-2v-1h-1zM29 12h1v1h-1zM4 13h1v1h-1zM17 13h2v1h-2zM20 13h1v2h2v1h-2v1h-1v1h-1v-3h1zM3 14h1v1h-1zM14 14h1v1h-1zM23 14h1v1h-1zM28 14h2v2h-1v3h-1v3h2v1h-1v2h-1v-2h-1v1h-1v1h2v1h1v1h-4v1h-1v-2h-1v1h-1v3h-6v-1h1v-1h1v1h3v-4h-2v-1h1v-1h1v-2h1v-2h1v2h2v-2h2v-1h1v-2h-3v-1h3zM1 15h2v1h-1v1h-1zM4 15h2v1h1v1h-1v2h-1v-1h-1v-1h1v-1h-1zM7 15h1v1h-1zM9 15h1v1h2v1h-4v-1h1zM12 15h2v1h1v1h-1v1h1v1h-2v-3h-1zM15 15h1v1h-1zM3 16h1v1h-1zM16 16h1v1h-1zM24 16h1v1h1v1h-2zM7 17h1v1h-1zM21 17h2v1h-1v1h-1zM2 18h2v1h1v1h-1v2h-2v-1h1v-2h-1zM9 18h2v1h-1v1h-1zM18 18h1v1h1v1h1v1h-1v1h-1v-1h-1v1h-1v1h-2v1h-1v-1h-2v-2h-1v-2h1v1h2v1h-1v1h1v-1h1v1h1v-2h2zM1 19h1v1h-1zM7 19h1v1h-1zM26 20v1h1v-1zM5 21h3v1h-3zM10 21h1v2h-1v1h1v3h-1v1h-1v-2h1v-1h-1v-3h1zM22 22v3h3v-3zM1 23h7v7h-7zM11 23h1v1h-1zM17 23h1v1h-1zM23 23h1v1h-1zM2 24v5h5v-5zM12 24h2v1h-1v2h-1zM16 24h1v1h-1zM3 25h3v3h-3zM15 25h1v1h2v-1h1v1h1v1h-6v-1h1zM29 25h1v1h-1zM11 27h1v1h1v-1h1v2h1v1h-4zM29 27h1v1h-1zM15 28h1v1h-1zM23 28h1v1h-1zM26 28h1v2h-1zM28 28h1v2h-1zM9 29h1v1h-1zM24 29h1v1h-1z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Wrap = () => {
  return (
    <div id="wrap">
      <Contents />
    </div>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stat" element={<StatPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/test" element={<Wrap />} />
      </Routes>
    </>
  );
}

export default App;
