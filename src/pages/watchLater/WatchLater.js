import { WatchLaterImage } from "../../assets/images";
import { MdDelete, AiOutlineClockCircle } from "../../assets/icons";
import ReactPlayer from "react-player";
import "./watchLater.css";
import { useWatchLater } from "../../context/watchLater/WatchLaterContext";

export const WatchLater = () => {
  const { watchLater, updateWatchLater } = useWatchLater();

  const date = new Date().toUTCString().slice(0, 16);

  return (
    <div className="watchLater-container">
      <div className="watchLater-content-container">
        <img
          src={WatchLaterImage}
          alt="watchlaterImage"
          className="watchlater-image"
        />
        <div className="text-white text-sm my-2">
          Saved Videos to Watch Later
        </div>
        <p className="text-white">{watchLater.length} videos</p>
      </div>
      <div className="watchlater-list-container my-2">
        <ul className="mb-2 ml-2">
            {watchLater.length === 0 && <div className="text-white no-videos">No videos in this playlist yet😅</div>}
          {watchLater.map((video) => { 
            return (
              <li key={video._id} className="stacked-list-item">
                <div className="flex-row justify-between">
                  <div className="flex-row justify-between">
                    <div className="watchlater-video-card">
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${video?._id}`}
                        width="100%"
                        height="100%"
                        light={false}
                      />
                    </div>
                    <div className="ml-2 flex-col flex-wrap">
                      <h3 className="watchLater-title text-white">{video?.title}</h3>
                      <p className="watchLater-creator text-white my-1">
                        {video?.creator}
                      </p>
                      <div className="clock-icon-container text-white flex-row align-center">
                        <AiOutlineClockCircle className="clock-icon mr-1" />
                        <p className="text-white inline watchLater-timestamp">
                          {date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <MdDelete
                      className="delete-icon text-white"
                      onClick={() => {
                        updateWatchLater(video);
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
