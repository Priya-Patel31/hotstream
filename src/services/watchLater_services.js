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
  return  await fetchApi({
      url: `/api/user/watchlater/${videoId}`,
      method: "delete",
    });
  };
  