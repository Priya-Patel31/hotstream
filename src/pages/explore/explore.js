import React, { useEffect } from "react";
import "./explore.css";
import { VideoCard } from "../../shared/components/videoCard/VideoCard";
import { Filter } from "./components/filter/Filter";
import { useExplore } from "../../context/explore/ExploreContext";

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
