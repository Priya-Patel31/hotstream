import {
  React,
  useEffect,
  VideoCard,
  Filter,
  useExplore,
  changeDocumentTitle,
} from "./index";
import "./explore.css";

export const Explore = () => {
  const { filteredVideos, dispatch } = useExplore();
  useEffect(() => {
    return () => {
      dispatch({
        type: "UPDATE_DROPDOWN",
        payload: { selectedDropdownId: null },
      });
    };
  }, [dispatch]);
  useEffect(() => {
    changeDocumentTitle("Hotstream-Explore");
  });
  return (
    <div className="explore-container">
      <div className="flex-col">
        <Filter />
      </div>
      <div className="flex-row flex-wrap gap-1 justify-center p-2">
        {filteredVideos.map((video) => (
          <VideoCard {...video} key={video._id} />
        ))}
      </div>
    </div>
  );
};
