import React, { useState } from "react";
import { AiOutlineClose, BsCollectionPlayFill } from "../../../assets/icons";
import { useModal } from "../../../context/modal/modalContext";
import { usePlaylist } from "../../../context/playlist/playlistContext";
import {
  addVideoToPlaylistApi,
  createPlaylistApi,
} from "../../../services/playlist_services";
import "./modal.css";

export const Modal = () => {
  const { showModal, setShowModal, clickedVideos, selectedVideoId } =
    useModal();
  const [createNewPlaylist, setCreateNewPlaylist] = useState(false);
  const [title, setTitle] = useState("");

  const { state, dispatch, deleteVideosFromPlaylist } = usePlaylist();

  const handleCreatePlaylist = async (title, description) => {
    if (title === "") {
      //Future reference
      // toast.error("Name could not be empty");
      return;
    }

    const { data, success } = await createPlaylistApi({ title, description });
    if (success) {
      dispatch({
        type: "UPDATE_PLAYLIST",
        payload: { playlists: data.playlists },
      });
      setCreateNewPlaylist(!createNewPlaylist);
    }
  };

  const handlePlaylistItemClicked = async (e, playlist) => {
    if (e.target.checked) {
      const { data, success } = await addVideoToPlaylistApi(
        playlist._id,
        clickedVideos
      );
      if (success) {
        dispatch({ type: "ADD_VIDEOS", payload: { playlist: data.playlist } });
        return true;
      }
      return false;
    } else {
      const { success } = deleteVideosFromPlaylist(
        playlist._id,
        clickedVideos._id
      );
      //NEED TO SHOW TOAST HERE
    }
  };

  return (
    showModal && (
      <div className="modal-wrapper">
        <div className="hotstream-modal-container">
          <div className="flex-row justify-between playlist-modal-container p-2">
            <p className="font-semibold hotstream-modal-heading text-white">
              Save to...
            </p>
            <AiOutlineClose
              className="hotstream-cross-icon text-white cursor-pointer"
              onClick={() => {
                setShowModal(!showModal);
              }}
            />
          </div>
          <div className="flex-row pt-2 pb-1 px-1 playlists-content-container">
            {createNewPlaylist ? (
              <div className="flex-col playlist-content">
                <p className="text-white mb-1">Playlist Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="mb-2 playlist-input"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <button
                  className="button playlist-button font-semibold"
                  onClick={() => {
                    handleCreatePlaylist(title, "");
                    setTitle("");
                  }}
                >
                  Create Playlist
                </button>
              </div>
            ) : (
              <div className="w-100 mb-2">
                <div
                  className={
                    state.playlists.length === 0
                      ? ""
                      : "playlists-container mb-1"
                  }
                >
                  {state.playlists?.map((playlist) => {
                    return (
                      <div className=" flex-row  align-center text-white mb-1">
                        <input
                          type="checkbox"
                          className="mr-1"
                          checked={playlist.videos.some((video) => {
                            return video._id === selectedVideoId;
                          })}
                          onChange={(e) => {
                            handlePlaylistItemClicked(e, playlist);
                          }}
                        />
                        <p>{playlist?.title}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex-row">
                  <BsCollectionPlayFill className="text-white" />
                  <p
                    className="ml-1 text-white cursor-pointer"
                    onClick={() => {
                      setCreateNewPlaylist(!createNewPlaylist);
                    }}
                  >
                    Create New Playlist
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};
