import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ExploreContextProvider } from "./context/explore/ExploreContext";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { PlaylistVideosContextProvider } from "./context/playlistVideos/PlaylistVideosContext";
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <PlaylistVideosContextProvider>
      <ExploreContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ExploreContextProvider>
    </PlaylistVideosContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
