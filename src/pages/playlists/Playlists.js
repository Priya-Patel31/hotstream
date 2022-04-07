import {
  useEffect,
  Playlist,
  Link,
  usePlaylist,
  EmptyList,
  changeDocumentTitle,
} from "./index";
import "./playlists.css";

export const Playlists = () => {
  useEffect(() => {
    changeDocumentTitle("Hotstream-playlists");
  }, []);

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
