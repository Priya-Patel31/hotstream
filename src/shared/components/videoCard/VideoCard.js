import React from "react";
import "./videoCard.css";
import {
  BsThreeDotsVertical,
  MdWatchLater,
  BsCollectionPlayFill,
  AiFillLike,
} from "../../../assets/icons";
import { useExplore } from "../../../context/explore/ExploreContext";
import ReactPlayer from "react-player";
import { DropDown } from "../dropDown/Dropdown";
import { usePlaylistVideos } from "../../../context/playlistVideos/PlaylistVideosContext";
import { Modal } from "../../../shared/components/modal/Modal";

import { useModal } from "../../../context/modal/modalContext";

export const VideoCard = (video) => {
  const { _id, title, description, creator, views, releaseDate } = video;
  const { isVideoPresent, handleOnPlay, updatePlaylistVideos } =
    usePlaylistVideos();
  const { showModal, setShowModal, setClickedVideos } = useModal();

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
          <MdWatchLater className="mr-1" />{" "}
          {!isVideoPresent("watchLater", _id)
            ? "Add to watch later"
            : "Remove from watch later"}
        </div>
      ),
      value: "watchLater",
    },

    {
      item: (
        <div>
          <AiFillLike className="mr-1" />{" "}
          {!isVideoPresent("likes", _id)
            ? "Add to liked videos"
            : "Remove from liked videos"}
        </div>
      ),
      value: "likes",
    },
  ];

  const handleDropDown = async (value) => {
   
      if (value === "playlist") {
        setShowModal(!showModal);
        setClickedVideos(video);
      } else {
        const { success } = await updatePlaylistVideos(value, video);
        if (success) {
          dispatch({ type: "UPDATE_DROPDOWN", payload: { id: null } });
        }
      }
   
  };

  const { selectedDropdownId, dispatch } = useExplore();
  const { setSelectedVideoId } = useModal();

  return (


    <div className="video-card-container flex-col">
      <Modal videoId={_id} />

      <div className="video-wrapper">
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${_id}`}
          width="100%"
          height="100%"
          onPlay={() => handleOnPlay("history", video)}

        />

        <div className="video-badge">{views}M views</div>
      </div>
      <div className="p-2 content-container">
        <div className="flex-row justify-between">
          <h2 className="video-card-title font-semibold">{title}</h2>
          <BsThreeDotsVertical
            className="three-dots-icon"
            onClick={() => {
              setSelectedVideoId(_id);
              dispatch({
                type: "UPDATE_DROPDOWN",
                payload: { id: _id === selectedDropdownId ? null : _id },
              });
            }}
          />
          {selectedDropdownId === _id && (
            <DropDown options={options} onClick={handleDropDown} />
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
