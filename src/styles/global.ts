import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/montserrat-v15-latin-300.woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/montserrat-v15-latin-regular.woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/montserrat-v15-latin-600.woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

`
export default GlobalStyles
