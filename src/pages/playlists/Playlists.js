import { Playlist } from "../../assets/images";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../context/playlist/playlistContext";
import "./playlists.css";
import { EmptyList } from "../../shared/components/emptyList/EmptyList";

export const Playlists = () => {
  const { state } = usePlaylist();
  const playlistsVideo = state.playlists;
  return (
    <div className="playlists-outer-container">
      <div className="playlists-inner-container flex-col align-center">
        <h2 className="text-center my-2 text-lg text-white">All Playlists </h2>
        <div className={playlistsVideo < 1 ? "flex-row" : "playlists-wrapper"}>
          {playlistsVideo.length < 1 ? (
            <EmptyList />
          ) : (
            playlistsVideo?.map((playlist) => {
              return (
                <Link
                  to={`/playlists/${playlist._id}`}
                  className="playlist-container"
                >
                  <img
                    src={Playlist}
                    alt="playlist"
                    className="playlist-image"
                  />
                  <div className="text-white text-center playlist-title-container">
                    {playlist?.title}
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
