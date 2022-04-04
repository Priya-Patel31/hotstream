import React from "react";
import { PlaylistVideos } from "../playlistVideos/PlaylistVideos";
import { usePlaylistVideos } from "../../context/playlistVideos/PlaylistVideosContext";

export const WatchLater = () => {
  const {state, deleteVideo } = usePlaylistVideos();
  return (
    <div>
      <PlaylistVideos
        playlistId={"watchLater"}
        playlistTitle={"Saved to Watch Later"}
        playlistVideos={state.watchLater}
        deleteVideo={deleteVideo}
      />
    </div>
  );
};
