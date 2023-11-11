import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { CitiesContextProvider } from "./contexts/citiesContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CitiesContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CitiesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
