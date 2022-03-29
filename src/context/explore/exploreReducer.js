export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        videos: action.payload.videos,
        categories: action.payload.categories,
      };
    case "UPDATE_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload.categoryName,
      };
    case "UPDATE_DROPDOWN":
      return {
        ...state,
        selectedDropdownId: action.payload.id,
      };
    default:
      return state;
  }
};
