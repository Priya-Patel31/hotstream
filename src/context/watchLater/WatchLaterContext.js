import { createContext, useContext, useReducer, useEffect } from "react";
import {
  watchLaterFetchApi,
  addToWatchLaterApi,
  deleteFromWatchLaterApi,
} from "../../services/watchLater_services";
import { reducer } from "./watchLaterReducer";

const WatchLaterContext = createContext();

const intialState = {
  status: "IDLE",
  watchLater: [],
};
const WatchLaterContextProvider = ({ children }) => {
  const [{ watchLater }, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    const { data, success } = watchLaterFetchApi();
    if (success) {
      dispatch({
        type: "GET_VIDEOS",
        payload: { watchLater: data.watchLater },
      });
    }
  }, []);

  const isVideoPresentInWatchLater = (_id) => {
    return watchLater.some((vid) => vid._id === _id);
  };

  const updateWatchLater = async (video) => {
    const isVideoAlreadyPresent = isVideoPresentInWatchLater(video._id);
    if (!isVideoAlreadyPresent) {
      const { data } = await addToWatchLaterApi(video);
      dispatch({
        type: "UPDATE_WATCH_LATER",
        payload: { watchLater: data.watchlater },
      });
    } else {
      const { data } = await deleteFromWatchLaterApi(video._id);
      dispatch({
        type: "UPDATE_WATCH_LATER",
        payload: { watchLater: data.watchlater },
      });
    }
  };

  return (
    <WatchLaterContext.Provider
      value={{ updateWatchLater, watchLater, isVideoPresentInWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};
export const useWatchLater = () => {
  return useContext(WatchLaterContext);
};
export { WatchLaterContextProvider };
