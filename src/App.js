import { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Global from "./assets/wrappers/Global";

const theme = {
  colors: {
    primaryCyan: "hsl(176, 50%, 47%)",
    primaryBlack: "hsl(0, 0%, 0%)",
    primaryGray: "hsl(0, 0%, 48%)",
    secondaryCyan: "hsl(176, 72%, 28%)",
    secondaryGray: "hsl(0, 0%, 90%)",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Hero />
      <Main />
    </ThemeProvider>
  );
};

export default App;
