import "./VideoGameDisplay.scss";
import video_game_image4 from "../../../assets/video-game-page-assets/game4.jpg";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BiSolidVolumeFull } from "react-icons/bi";
import { BsFullscreen, BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

function VideoGameDisplay() {
  return (
    <div className="video-game-display">
      <div className="video-game-display-box">
        <img src={video_game_image4} alt="video-game-image" />
        <div className="video-buttons">
          <button>
            <AiFillStepBackward />
          </button>
          <button>
            <AiFillStepForward />
          </button>
          <button>
            <BsFillPlayFill />
          </button>
          <button>
            <BsFillPauseFill />
          </button>
          <button>
            <BiSolidVolumeFull />
          </button>
          <button>
            <BsFullscreen />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoGameDisplay;
