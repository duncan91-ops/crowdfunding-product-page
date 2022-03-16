import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-size: 1.6rem;
  font-family: 'Commissioner', sans-serif;
  min-height: 100vh;
}
`;

export default Global;
