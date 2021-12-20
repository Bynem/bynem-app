import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
      @media (max-width: 900px){
      overflow-x: hidden}
  }

  a{
    color: black;
    text-decoration: none;
    transition: 0.3s;
    &:hover{
      opacity: 0.7
    }
  }
 

`
export default GlobalStyles
