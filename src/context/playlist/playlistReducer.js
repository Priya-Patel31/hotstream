export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PLAYLIST":
      return { ...state, playlists: action.payload.playlists };

    case "UPDATE_PLAYLIST_VIDEOS": {
      const findPlaylistIndex = state.playlists.findIndex((playlist) => {
        return playlist._id === action.payload.playlist._id;
      });
      let updatedPlaylists = [...state.playlists];
      updatedPlaylists[findPlaylistIndex] = action.payload.playlist;
      return { ...state, playlists: updatedPlaylists };
    }
    
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
