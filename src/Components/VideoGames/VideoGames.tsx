import VideoGameDisplay from "./VideoGameDisplay/VideoGameDisplay";
import { GamePortfolioBoxes1 } from "./VideoGamePortfolioBox/GamePortfolioBoxes";
import "./VideoGames.scss";

function VideoGames() {
  return (
    <div className="video-games">
      <div className="video-games-title">
        <div>Video Games I Made</div>
      </div>
      <div className="video-games-portfolio-container">
        <div className="video-games-holder">
          <div className="games-row">
            <GamePortfolioBoxes1 />
            <GamePortfolioBoxes1 />
            <GamePortfolioBoxes1 />
            <GamePortfolioBoxes1 />
          </div>
        </div>
        <div className="video-games-display">
          <VideoGameDisplay />
        </div>
      </div>
    </div>
  );
}

export default VideoGames;
