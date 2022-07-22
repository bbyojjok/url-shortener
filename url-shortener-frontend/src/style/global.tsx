import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`${css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    min-height: 100%;
    background: #f9f7f7;
  }

  #root {
    min-height: 100%;
  }

  html {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: inherit; /* 모든 엘리먼트의 box-sizing 값을 border-box로 설정 */
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  /* reset */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  p,
  form,
  fieldset,
  input,
  table,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    font-size: 1rem;
  }
  ol,
  ul {
    list-style: none;
  }
  fieldset,
  img {
    border: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .transition-group {
    position: relative;
  }
  .page {
    position: absolute;
    left: 15px;
    right: 15px;
  }
  .page-enter {
    opacity: 0;
  }
  .page-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .page-exit {
    opacity: 1;
  }
  .page-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`}
  
`;

export default GlobalStyle;
