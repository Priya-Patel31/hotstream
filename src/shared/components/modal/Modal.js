import React, { useState } from "react";
import { AiOutlineClose, BsCollectionPlayFill } from "../../../assets/icons";
import { useModal } from "../../../context/modal/modalContext";
import "./modal.css";

export const Modal = () => {
  const { showModal, setShowModal } = useModal();
  const [createNewPlaylist, setCreateNewPlaylist] = useState(false);
  const [createPlaylist, setCreatePlaylist] = useState(false);
  return (
    showModal && (
      <div className="wrapper">
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
          <div className="flex-row pt-2 pb-1 px-1">
            {createNewPlaylist ? (
              <div className="flex-col px-1">
                <p className="text-white mb-1">Playlist Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="mb-2 playlist-input"
                />
                <button
                  className="button playlist-button font-semibold"
                  onClick={() => { }}
                >
                  Create Playlist
                </button>
              </div>
            ) : (
              <div className="flex-row px-1">
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
            )}
          </div>
        </div>
      </div>
    )
  );
};
