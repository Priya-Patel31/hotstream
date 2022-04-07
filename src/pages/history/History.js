import React,{useEffect} from "react";
import { PlaylistVideos } from "../playlistVideos/PlaylistVideos";
import { usePlaylistVideos } from "../../context/playlistVideos/PlaylistVideosContext";
import { changeDocumentTitle } from "../../shared/utils/changeDocumentTitle";

export const History = () => {
  useEffect(()=>{
    changeDocumentTitle("Hotstream-history")
  },[])
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
