import React from 'react'
import { usePlaylistVideos } from '../../context/playlistVideos/PlaylistVideosContext'
import { PlaylistVideos } from '../playlistVideos/PlaylistVideos'

export const Likes = () => {
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
