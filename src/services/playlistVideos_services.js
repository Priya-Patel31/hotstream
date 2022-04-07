import { fetchApi } from "../shared/utils/fetchApi";

export const watchLaterFetchApi = async () => {
  return await fetchApi({
    url: "/api/user/watchlater",
    method: "get",
  });
};

export const addToWatchLaterApi = async (video) => {
  return await fetchApi({
    url: "/api/user/watchlater",
    method: "post",
    body: { video },
  });
};

export const deleteFromWatchLaterApi = async (videoId) => {
  return await fetchApi({
    url: `/api/user/watchlater/${videoId}`,
    method: "delete",
  });
};

export const playlistVideosFetchApi = async () => {
  try {
    const promise1 = await fetchApi({
      url: "/api/user/watchlater",
      method: "get",
    });
    const promise2 = await fetchApi({
      url: "/api/user/likes",
      method: "get",
    });
    const promise3 = await fetchApi({
      url: "/api/user/history",
      method: "get",
    });
    

    const response = await Promise.all([
      promise1,
      promise2,
      promise3,
    ]);
  
    return {
      data: {
        watchLater: response[0].data.watchlater,
        likes: response[1].data.likes,
        history: response[2].data.history
        
      },
      success: true,
      message: "Fetched successfully",
    };
  } catch (e) {
    console.log(e);
    return {
      data: null,
      success: false,
      message: "API failed",
    };
  }
};
export const addToLikesApi = async (video) => {
  return await fetchApi({
    url: "/api/user/likes",
    method: "post",
    body: { video },
  });
};

export const deleteFromLikesApi = async (videoId) => {
  return await fetchApi({
    url: `/api/user/likes/${videoId}`,
    method: "delete",
  });
};

export const addToHistoryApi = async (video) => {
  return await fetchApi({
    url: `/api/user/history`,
    method: "post",
    body: { video },
  });
};

export const deleteFromHistoryApi = async (videoId) => {
  return await fetchApi({
    url: `/api/user/history/${videoId}`,
    method: "delete",
  });
};

export const deleteAllVideosFromHistoryApi = async () => {
  return await fetchApi({
    url: `/api/user/history/all`,
    method: "delete",
  });
};

