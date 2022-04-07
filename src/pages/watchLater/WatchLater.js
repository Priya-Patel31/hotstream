import React,{useEffect} from "react";
import { PlaylistVideos } from "../playlistVideos/PlaylistVideos";
import { usePlaylistVideos } from "../../context/playlistVideos/PlaylistVideosContext";
import { changeDocumentTitle } from "../../shared/utils/changeDocumentTitle";

export const WatchLater = () => {
  useEffect(()=>{
   changeDocumentTitle("Hotstream-Watchlater");
  },[])
 
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
