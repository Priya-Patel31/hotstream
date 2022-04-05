export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PLAYLIST":
      return { ...state, playlists: action.payload.playlists };

    case "ADD_VIDEOS":
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          return playlist._id === action.payload.playlist._id
            ? action.payload.playlist
            : playlist;
        }),
      };
    default:
      return state;
  }
};
