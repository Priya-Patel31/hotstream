import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../context/playlist/playlistReducer";
import {
  getAllPlaylistsApi,
  deleteVideosFromPlaylistApi,
  deletePlaylistFromApi,
} from "../../services/playlist_services";

const PlaylistContext = createContext();

const PlaylistContextProvider = ({ children }) => {
  const intialState = {
    playlists: [],
  };

  const [state, dispatch] = useReducer(reducer, intialState);

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

  const deleteVideosFromPlaylist = async (playlistId, videoId) => {
    const { data, success } = await deleteVideosFromPlaylistApi(
      playlistId,
      videoId
    );
    if (success) {
      dispatch({
        type: "UPDATE_PLAYLIST_VIDEOS",
        payload: { playlist: data.playlist },
      });
      return true;
    }
    return false;
  };
  const deletePlaylist = async (playlistId) => {
    const { data, success } = await deletePlaylistFromApi(playlistId);
    if (success) {
      dispatch({
        type: "UPDATE_PLAYLIST",
        payload: { playlists: data.playlists },
      });
      return true;
    }
    return false;
  };
  return (
    <PlaylistContext.Provider
      value={{ state, dispatch, deleteVideosFromPlaylist, deletePlaylist }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
export const usePlaylist = () => {
  return useContext(PlaylistContext);
};
export { PlaylistContextProvider };
