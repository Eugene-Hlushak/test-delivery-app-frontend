import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  min-width: 320px;
  min-height: 100vh;
   color: rgba(50, 44, 44, 0.87);
  background-color: #ffab44;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
  list-style: none;
  padding: 0;
  margin: 0;

}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

a{
  text-decoration: none;
  
}
`;
