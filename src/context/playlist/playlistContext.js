import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../context/playlist/playlistReducer";
import { getAllPlaylistsApi } from "../../services/playlist_services";

const PlaylistContext = createContext();

const PlaylistContextProvider = ({ children }) => {
  const intialState = {
    playlists: [],
  };

  const [ state, dispatch ] = useReducer(reducer, intialState);

  useEffect(() => {
    (async function () {
      const { data, success } = getAllPlaylistsApi();
      if (success) {
        dispatch({
          type: "UPDATE_PLAYLIST",
          payload: { playlists: data.playlists },
        });
      }
    })();
  }, [dispatch]);

  return (
    <PlaylistContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};
export const usePlaylist = () => {
  return useContext(PlaylistContext);
};
export { PlaylistContextProvider };
