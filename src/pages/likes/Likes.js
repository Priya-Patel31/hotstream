import React,{useEffect} from 'react'
import { usePlaylistVideos } from '../../context/playlistVideos/PlaylistVideosContext'
import { changeDocumentTitle } from '../../shared/utils/changeDocumentTitle'
import { PlaylistVideos } from '../playlistVideos/PlaylistVideos'

export const Likes = () => {
  useEffect(()=>{
    changeDocumentTitle("Hotstream-Likes")
  },[])
  
    const {state,deleteVideo} = usePlaylistVideos();
  return (
    <div>
        <PlaylistVideos
         playlistId={"likes"}
         playlistTitle={"Likes"}
         playlistVideos={state.likes}
         deleteVideo={deleteVideo}
        />

       
    </div>
  )
}
