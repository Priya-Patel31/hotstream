export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_VIDEOS": {
      return { ...state, watchLater: action.payload.watchLater };
    }
    case "UPDATE_WATCH_LATER": {
        console.log(action.payload.watchLater);
      return { ...state, watchLater: action.payload.watchLater };
    }

    default:
      return state;
  }
};
