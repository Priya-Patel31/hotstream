import React from "react";
import "./videoCard.css";
import {
  BsThreeDotsVertical,
  MdWatchLater,
  BsCollectionPlayFill,
} from "../../../assets/icons";
import { useExplore } from "../../../context/explore/ExploreContext";
import ReactPlayer from "react-player";
import { DropDown } from "../dropDown/Dropdown";

export const VideoCard = (product) => {
  const { _id, title, description, creator, views, releaseDate } = product;

  const options = [
    {
      item: (
        <div>
          <BsCollectionPlayFill className="mr-1" /> Add to playlists
        </div>
      ),
      value: "playlist",
    },
    {
      item: (
        <div>
          <MdWatchLater className="mr-1" /> Add to watch later
        </div>
      ),
      value: "watchLater",
    },
  ];

  const { selectedDropdownId, dispatch } = useExplore();
  return (
    <div className="video-card-container flex-col">
      <div className="video-wrapper">
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${_id}`}
          width="100%"
          height="100%"
          light={false}
        />

        <div className="video-badge">{views}M views</div>
      </div>
      <div className="p-2 content-container">
        <div className="flex-row justify-between">
          <h2 className="video-card-title font-semibold">{title}</h2>
          <BsThreeDotsVertical
            className="three-dots-icon"
            onClick={() => {
              dispatch({
                type: "UPDATE_DROPDOWN",
                payload: { id: _id === selectedDropdownId ? null : _id },
              });
            }}
          />
          {selectedDropdownId === _id && (
            <DropDown
              options={options}
              onClick={(value) => {
                console.log(value);
                dispatch({ type: "UPDATE_DROPDOWN", payload: { id: null } });
              }}
            />
          )}
        </div>
        <div className="flex-col">
          <p className="video-card-subtitle my-1 font-medium text-grey">
            {description}
          </p>
          <ul className="flex-row">
            <li className="video-creator list-style-none font-medium text-grey">
              {creator}
            </li>
            <li className="release-date font-medium text-grey">
              {releaseDate}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
