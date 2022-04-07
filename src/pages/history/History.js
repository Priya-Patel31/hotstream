import React from "react";
import { PlaylistVideos } from "../playlistVideos/PlaylistVideos";
import { usePlaylistVideos } from "../../context/playlistVideos/PlaylistVideosContext";

export const History = () => {
  const { state, deleteVideo, deleteAllVideosFromHistory } =
    usePlaylistVideos();
  return (
    <div>
      <PlaylistVideos
        playlistId={"history"}
        playlistTitle={"History"}
        playlistVideos={state.history}
        deleteVideo={deleteVideo}
        deleteAllVideosFromHistory={deleteAllVideosFromHistory}
      />
    </div>
  );
};
