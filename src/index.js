import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ExploreContextProvider } from "./context/explore/ExploreContext";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { WatchLaterContextProvider } from "./context/watchLater/WatchLaterContext";
import { AuthContextProvider } from "./context/auth/authContext";
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WatchLaterContextProvider>
        <ExploreContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ExploreContextProvider>
      </WatchLaterContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
