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
  transition: all .3s ease-in;
}

button:not(:disabled):hover {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
}

/* button:not(:disabled):hover {
  cursor: pointer;
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

button:not(:disabled):active {
  transform: translateY(-2px);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);

} */
`;

export default Global;
