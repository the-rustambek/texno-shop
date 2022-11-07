import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "./Context/CountContext";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
      <Provider>
         <App />
      </Provider>
       </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
