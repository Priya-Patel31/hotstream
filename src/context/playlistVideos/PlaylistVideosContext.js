import { createContext, useContext, useReducer, useEffect } from "react";
import {
  playlistVideosFetchApi,
  addToWatchLaterApi,
  deleteFromWatchLaterApi,
  addToHistoryApi,
  deleteFromHistoryApi,
  addToLikesApi,
  deleteFromLikesApi,
  deleteAllVideosFromHistoryApi,
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
    (async function () {
      const { data, success } = await playlistVideosFetchApi();
      console.log(data);
      if (success) {
        dispatch({
          type: "GET_VIDEOS",
          payload: {
            watchLater: data.watchLater,
            history: data.history,
            likes: data.likes,
            playlists: data.playlists
          },
        });
      }
    })();
  }, []);
  const handleOnPlay = async (playlistId, video) => {
    const { data, success } = await addToHistoryApi(video);
   
    if (success) {
      dispatch({
        type: "UPDATE_PLAYLIST_VIDEOS",
        payload: { playlistId, videos: data.history },
      });

    }
  };

  const deleteAllVideosFromHistory = () => {
    const { data, success } = deleteAllVideosFromHistoryApi();
    if (success) {
      dispatch({
        type: "UPDATE_PLAYLIST_VIDEOS",
        payload: { playlistId: "history", videos: data.history },
      });
      return true;
    }

    return false;
  };

  const isVideoPresent = (playlistId, _id) => {
    return state[playlistId]?.some((vid) => vid._id === _id);
  };

  const updatePlaylistVideos = async (playlistId, video) => {
    const date = new Date().toUTCString().slice(0, 16);

    const isVideoAlreadyPresent = isVideoPresent(playlistId, video._id);
    let videos = [],
      success = false;
     
    switch (playlistId) {

      case "watchLater":
        const { data: data1, success: videoSuccess } = !isVideoAlreadyPresent
          ? await addToWatchLaterApi({ ...video, addedAt: date })
          : await deleteFromWatchLaterApi(video._id);
        videos = data1.watchlater;
        success = videoSuccess;
        break;

      case "history":
        const { data: data2, success: success2 } = !isVideoAlreadyPresent
          ? await addToHistoryApi({ ...video, addedAt: date })
          : await deleteFromHistoryApi(video._id);
        videos = data2.history;
        success = success2;
        break;

      case "likes":
        const { data: data3, success: success3 } = !isVideoAlreadyPresent
          ? await addToLikesApi({ ...video, addedAt: date })
          : await deleteFromLikesApi(video._id);
        videos = data3.likes;
        success = success3;
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
      value={{
        updatePlaylistVideos,
        state,
        isVideoPresent,
        dispatch,
        deleteAllVideosFromHistory,
        handleOnPlay
      }}
    >
      {children}
    </PlaylistVideosContext.Provider>
  );
};
export const usePlaylistVideos = () => {
  return useContext(PlaylistVideosContext);
};
export { PlaylistVideosContextProvider };
