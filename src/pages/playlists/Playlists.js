import { Playlist } from "../../assets/images";
import "./playlists.css";

export const Playlists = () => {
  return (
    <div className="playlists-outer-container">
      <div className="playlists-inner-container flex-col align-center">
        <h2 className="text-center my-2 text-lg text-white">All Playlists </h2>
        <div className="playlists-wrapper">
          <div className="playlist-container">
            <img src={Playlist} alt="playlist" className="playlist-image"  />
            <div className="text-white text-center like">Liked Videos</div>
          </div>
          <div className="playlist-container">
            <img src={Playlist} alt="playlist" className="playlist-image"  />
            <div className="text-white text-center like">Liked Videos</div>
          </div>
          <div className="playlist-container">
            <img src={Playlist} alt="playlist" className="playlist-image"  />
            <div className="text-white text-center like">Liked Videos</div>
          </div>
          <div className="playlist-container">
            <img src={Playlist} alt="playlist" className="playlist-image"  />
            <div className="text-white text-center like">Liked Videos</div>
          </div>
         
        </div>
      </div>
    </div>
  );
};
