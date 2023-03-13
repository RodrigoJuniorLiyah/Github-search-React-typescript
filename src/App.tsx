import React from "react";
import Home from "./pages/home";
import GlobalStyle from "./styles/Global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "styled-components";
import { dark } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <ToastContainer />
      <Home />
    </ThemeProvider>
  );
}

export default App;
