import { WatchLaterImage } from "../../assets/images";
import { MdDelete, AiOutlineClockCircle } from "../../assets/icons";
import ReactPlayer from "react-player";
import "./playlistVideos.css";

export const PlaylistVideos = ({ playlistId, playlistTitle, playlistVideos, deleteVideo}) => {
  return (
    <div className="playlist-videos-container">
      <div className="playlist-videos-content-container">
        <img
          src={WatchLaterImage}
          alt="playlist-videos"
          className="playlist-videos-image"
        />
        <div className="text-white text-sm my-2">{playlistTitle}</div>
        <p className="text-white">{playlistVideos.length} videos</p>
      </div>
      <div className="playlist-videos-list-container my-2">
        <ul className="mb-2 ml-2">
          {playlistVideos.length === 0 && (
            <div className="text-white no-videos">
              No videos in this playlist yet😅
            </div>
          )}
          {playlistVideos.map((video) => {
            return (
              <li key={video._id} className="stacked-list-item">
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
                      onClick={() => {
                        deleteVideo(playlistId,video);
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
