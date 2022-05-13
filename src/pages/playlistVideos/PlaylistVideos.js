
import {
  WatchLaterImage,
  MdDelete,
  AiOutlineClockCircle,
  ReactPlayer,
  useNavigate,
  useParams,
  usePlaylistVideos,
  usePlaylist,
  changeDocumentTitle,
  useEffect,
  toast,
} from "./index";
import "./playlistVideos.css";


export const PlaylistVideos = ({
  playlistId = null,
  playlistTitle,
  playlistVideos,
  isFromPlaylist = false,
}) => {

  useEffect(() => {
    changeDocumentTitle("Hotstream-playlist");
  }, []);

  const { updatePlaylistVideos, deleteAllVideosFromHistory } =
    usePlaylistVideos();


  const { state, deleteVideosFromPlaylist, deletePlaylist } = usePlaylist();
  const params = useParams();
  const navigate = useNavigate();
  if (playlistId === null) {
    isFromPlaylist = true;
    const playlist = state.playlists?.find((playlist) => {
      return playlist._id === params.playlistId;
    });
    if (playlist) {
      playlistId = playlist._id;
      playlistTitle = playlist.title;
      playlistVideos = playlist.videos;
    }
  }

  return (
    <div className="playlist-videos-container">
      <div className="playlist-videos-content-container">
        <img
          src={WatchLaterImage}
          alt="playlist-videos"
          className="playlist-videos-image"
        />
        <div className="text-white text-sm my-2">{playlistTitle}</div>
        <div className="flex-row justify-between align-center">
          <p className="text-white flex-row">{playlistVideos?.length} videos</p>
          {isFromPlaylist && (
            <MdDelete
              className="text-white text-sm"
              onClick={async() => {
                const  success  = await deletePlaylist(playlistId);
                console.log(success);
                if (success) {
                  toast.success(`${playlistTitle} deleted`);
                  navigate(-1);
                } else {
                  toast.error("Something went wrong delete");
                }

              }}
            />
          )}
          {playlistId === "history" && (

            <button
              className="button primary-button-pink"
              onClick={() => {
                deleteAllVideosFromHistory();
              }}
            >
              Clear All
            </button>
          )}
        </div>
      </div>
      <div className="playlist-videos-list-container my-2">
        <ul className="mb-2 ml-2">
          {playlistVideos?.length === 0 && (
            <div className="text-white no-videos">
              No videos in this playlist yet😅
            </div>
          )}

          {playlistVideos?.map((video) => {
            return (
              <li key={video?._id} className="stacked-list-item">
                <div className="flex-row justify-between">
                  <div className="flex-row justify-between">
                    <div className="playlist-videos-video-card">
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${video?._id}`}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="ml-2 flex-col flex-wrap">
                      <h3 className="playlist-videos-title text-white">
                        {video?.title}
                      </h3>
                      <p className="playlist-videos-creator text-white my-1">
                        {video?.creator}
                      </p>
                      <div className="clock-icon-container text-white flex-row align-center">
                        <AiOutlineClockCircle className="clock-icon mr-1" />
                        <p className="text-white inline playlist-videos-timestamp">
                          {video?.addedAt}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <MdDelete
                      className="delete-icon text-white"
                      onClick={async () => {
                        if (isFromPlaylist) {
                          const  success  = await deleteVideosFromPlaylist(
                            playlistId,
                            video._id
                          );
                          if (success) {
                            toast.success(`Videos deleted from playlist`);
                          } else {
                            toast.error("Something went wrong video");
                          }

                        } else {
                          updatePlaylistVideos(playlistId, video);
                        }
                      }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
