import {createGlobalStyle} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      outline: 0;
    }

  :root {
    --primary: #312e38;
    --blue: #008f85;
    --red: #c53030;
    --grey: #e9e9e9;
    --yellow: #FFD400;
  }

  body {
    background: var(--primary);
    color: #fff;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  input, button, pre, p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  pre {
    word-break: break-word;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    text-transform: none;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 0;
  }
`;