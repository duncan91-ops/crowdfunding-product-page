import { ThemeProvider } from "styled-components";
import Global from "./assets/wrappers/Global";

const theme = {
  colors: {
    primaryCyan: "hsl(176, 50%, 47%)",
    primaryBlack: "hsl(0, 0%, 0%)",
    primaryGray: "hsl(0, 0%, 48%)",
    secondaryCyan: "hsl(176, 72%, 28%)",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
    </ThemeProvider>
  );
};

export default App;
