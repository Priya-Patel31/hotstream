import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ExploreContextProvider } from "./context/explore/ExploreContext";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { AuthContextProvider } from "./context/auth/authContext";
import { PlaylistVideosContextProvider } from "./context/playlistVideos/PlaylistVideosContext";
import { ModalContextProvider } from "./context/modal/modalContext";
import { PlaylistContextProvider } from "./context/playlist/playlistContext";


makeServer();
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PlaylistContextProvider>
        <ModalContextProvider>
          <PlaylistVideosContextProvider>
            <ExploreContextProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ExploreContextProvider>
          </PlaylistVideosContextProvider>
        </ModalContextProvider>
      </PlaylistContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
