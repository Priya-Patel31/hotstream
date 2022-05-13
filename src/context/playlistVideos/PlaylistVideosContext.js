import { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";
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
      if (success) {
        dispatch({
          type: "GET_VIDEOS",
          payload: {
            watchLater: data.watchLater,
            history: data.history,
            likes: data.likes,
          },
        });
        toast.success("Videos fetched successfully");
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
      return true;
    } else {
      return false;
    }
  };

  const deleteAllVideosFromHistory = async () => {
    const { data, success } = await deleteAllVideosFromHistoryApi();
    if (success) {
      dispatch({
        type: "UPDATE_PLAYLIST_VIDEOS",
        payload: { playlistId: "history", videos: data.history },
      });
      toast.success("All videos deleted from history");
    } else {
      toast.error("Something went wrong");
    }
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
        const { data: dataWatchlater, success: watchLaterSuccess } =
          !isVideoAlreadyPresent
            ? await addToWatchLaterApi({ ...video, addedAt: date })
            : await deleteFromWatchLaterApi(video._id);
        videos = dataWatchlater.watchlater;
        success = watchLaterSuccess;
        break;

      case "history":
        const { data: dataHistory, success: historySuccess } =
          !isVideoAlreadyPresent
            ? await addToHistoryApi({ ...video, addedAt: date })
            : await deleteFromHistoryApi(video._id);
        videos = dataHistory.history;
        success = historySuccess;
        break;

      case "likes":
        const { data: dataLikes, success: likesSuccess } =
          !isVideoAlreadyPresent
            ? await addToLikesApi({ ...video, addedAt: date })
            : await deleteFromLikesApi(video._id);
        videos = dataLikes.likes;
        success = likesSuccess;
        break;

      default:
        break;
    }
    if (success) {
      dispatch({
        type: "UPDATE_PLAYLIST_VIDEOS",
        payload: { playlistId, videos },
      });
      const toastMessage = `Video ${
        isVideoAlreadyPresent ? "deleted from" : "added to"
      } ${playlistId}`;
      toast.success(toastMessage);
    } else {
      toast.error("Something went wrong");

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
        handleOnPlay,
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
