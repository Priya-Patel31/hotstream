import { Playlist } from "../../assets/images";
import { usePlaylist } from "../../context/playlist/playlistContext";
import "./playlists.css";

export const Playlists = () => {
  const { state} = usePlaylist();
  return (
    <div className="playlists-outer-container">
      <div className="playlists-inner-container flex-col align-center">
        <h2 className="text-center my-2 text-lg text-white">All Playlists </h2>
        <div className="playlists-wrapper">
          {state.playlists?.map((playlist) => {
            return (
              <div className="playlist-container">
                <img src={Playlist} alt="playlist" className="playlist-image" />
                <div className="text-white text-center">
                  {playlist?.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
