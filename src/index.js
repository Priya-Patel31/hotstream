import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ExploreContextProvider } from "./context/explore/ExploreContext";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <ExploreContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExploreContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
