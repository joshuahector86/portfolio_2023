import "./VideoGameDisplay.scss";
import video_game_image from "../../../assets/video_game_photo.jpg";
function VideoGameDisplay() {
  return (
    <div className="video-game-display">
      <div className="video-game-display-box">
        <img src={video_game_image} alt="video-game-image" />
      </div>
      <div className="caption">
        The caption that is on the previous thing here
      </div>
    </div>
  );
}

export default VideoGameDisplay;
