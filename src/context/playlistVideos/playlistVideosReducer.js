export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_VIDEOS": {
      const {watchLater,history,likes} = action.payload;
      return { ...state, watchLater,history,likes };
    }
    case "UPDATE_PLAYLIST_VIDEOS": {
      return { ...state, [action.payload.playlistId]: action.payload.videos};
    }

    default:
      return state;
  }
};
