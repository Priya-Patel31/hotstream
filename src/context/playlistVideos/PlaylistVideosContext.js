import { createContext, useContext, useReducer, useEffect } from "react";
import {
  playlistVideosFetchApi,
  addToWatchLaterApi,
  deleteFromWatchLaterApi,
} from "../../services/playlistVideos_services";
import { reducer } from "./playlistVideosReducer";

const PlaylistVideosContext = createContext();

const intialState = {
  status: "IDLE",
  watchLater: [],
  history: [],
  likes: [],
};
const PlaylistVideosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    const { data, success } = playlistVideosFetchApi();
    if (success) {
      dispatch({
        type: "GET_VIDEOS",
        payload: {
          watchLater: data.watchLater,
          history: data.history,
          likes: data.likes,
        },
      });
    }
  }, []);

  const isVideoPresent = (playlistId, _id) => {
    return state[playlistId].some((vid) => vid._id === _id);
  };

  const updatePlaylistVideos = async (playlistId, video) => {
    const date = new Date().toUTCString().slice(0, 16);
    const isVideoAlreadyPresent = isVideoPresent(playlistId, video._id);
    let videos = [],
      success = false;
    switch (playlistId) {
      case "watchLater":
        const { data, success: videoSuccess } = !isVideoAlreadyPresent
          ? await addToWatchLaterApi({ ...video, addedAt: date })
          : await deleteFromWatchLaterApi(video._id);
        videos = data.watchLater;
        success = videoSuccess;
        break;

      default:
        break;
    }
    if (success) {
      dispatch({
        type: "UPDATE_PLAYLIST_VIDEOS",
        payload: { playlistId, videos },
      });
    }
  };

  return (
    <PlaylistVideosContext.Provider
      value={{ updatePlaylistVideos, state, dispatch }}
    >
      {children}
    </PlaylistVideosContext.Provider>
  );
};
export const usePlaylistVideos = () => {
  return useContext(PlaylistVideosContext);
};
export { PlaylistVideosContextProvider };
