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
  font-weight: 400;
  font-family: 'Commissioner', sans-serif;
  min-height: 100vh;
  background-color: hsl(0, 10%, 95%);
}

button {
  border: none;
  offset: none;
}

button:hover {
  cursor: pointer;
}
`;

export default Global;
