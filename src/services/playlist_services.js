import { fetchApi } from "../shared/utils/fetchApi";

export const createPlaylistApi = async ({ title, description }) => {
  return await fetchApi({
    url: "/api/user/playlists",
    method: "post",
    body: {
      playlist: { title, description },
    },
    propertyName: "playlist",
  });
};
export const getAllPlaylistsApi = async () => {
  return await fetchApi({
    url: "/api/user/playlists",
    method: "get",
  });
};
export const getPlaylistApi = async (playlistId) => {
  return await fetchApi({
    url: `/api/user/playlists/${playlistId}`,
    method: "get",
  });
};
export const addVideoToPlaylistApi = async (playlistId, video) => {
  return await fetchApi({
    url: `/api/user/playlists/${playlistId}`,
    method: "post",
    body: { video },
  });
};
export const deletePlaylistFromApi = async (playlistId) => {
  return await fetchApi({
    url: `/api/user/playlists/${playlistId}`,
    method: "delete",
  });
};

export const deleteVideosFromPlaylistApi = async (playlistId, _id) => {
  return await fetchApi({
    url: `/api/user/playlists/${playlistId}/${_id}`,
    method: "delete",
  });
};
