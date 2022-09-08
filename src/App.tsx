import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ShopProvider } from "./contexts/ShopContext";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ShopProvider>
          <Routes />
        </ShopProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
