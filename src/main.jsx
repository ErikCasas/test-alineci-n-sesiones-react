import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme/theme.js";
import ContextProvider from "./context/contextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>{/*se puede hacer una analogia inidcando que se hace lo mismo que con el chakraProvider*/}
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </ContextProvider>
);
