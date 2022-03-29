import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./exploreReducer";
import { fetchDataApi } from "../../services/explore_services";

const ExploreContext = createContext();
const ExploreContextProvider = ({ children }) => {
  useEffect(() => {
    (async function () {
      const { data, success } = await fetchDataApi();
      if (success) {
        dispatch({
          type: "FETCH_DATA",
          payload: { videos: data.videos, categories: data.categories },
        });
      }
    })();
  }, []);

  const intialState = {
    videos: [],
    categories: [],
    selectedCategory: "All",
    selectedDropdownId : null
  };
  const [{ videos, categories, selectedCategory,selectedDropdownId }, dispatch] = useReducer(
    reducer,
    intialState
  );

  const getFilteredVideos = (videos) => {
    if (selectedCategory === "All") return videos;
    return videos.filter((video) => {
      return (
        video.categoryName.toLowerCase() === selectedCategory.toLowerCase()
      );
    });
  };
  const filteredVideos = getFilteredVideos(videos);

  return (
    <ExploreContext.Provider
      value={{ videos, categories, selectedCategory, dispatch, filteredVideos ,selectedDropdownId}}
    >
      {children}
    </ExploreContext.Provider>
  );
};
const useExplore = () => {
  return useContext(ExploreContext);
};
export { ExploreContextProvider, useExplore };
