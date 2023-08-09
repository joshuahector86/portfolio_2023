import "./GamePortfolioBoxes.scss";
import {
  video_game_example1,
  video_game_example2,
  video_game_example3,
  video_game_example4,
} from "../../../assets/video-game-page-assets";
import { logo_square } from "../../../assets/general-assets";

function GamePortfolioBoxes1() {
  return (
    <div className="portfolio-box">
      <div className="game-image">
        <img src={video_game_example1} alt="video-game-image-here" />
      </div>
      <div className="game-caption">
        <div className="game-title">Game Title</div>
        <p>
          This will be some form of description of the game or something witty
          here.
        </p>
        <img src={logo_square} alt="my-logo_square" />
      </div>
    </div>
  );
}

function GamePortfolioBoxes2() {
  return (
    <div className="portfolio-box">
      <div className="game-image">
        <img src={video_game_example2} alt="video-game-image-here" />
      </div>
      <div className="game-caption">
        <div className="game-title">Game Title</div>
        <p>
          This will be some form of description of the game or something witty
          here.
        </p>
        <img src={logo_square} alt="my-logo_square" />
      </div>
    </div>
  );
}
function GamePortfolioBoxes3() {
  return (
    <div className="portfolio-box">
      <div className="game-image">
        <img src={video_game_example3} alt="video-game-image-here" />
      </div>
      <div className="game-caption">
        <div className="game-title">Game Title</div>
        <p>
          This will be some form of description of the game or something witty
          here.
        </p>
        <img src={logo_square} alt="my-logo_square" />
      </div>
    </div>
  );
}
function GamePortfolioBoxes4() {
  return (
    <div className="portfolio-box">
      <div className="game-image">
        <img src={video_game_example4} alt="video-game-image-here" />
      </div>
      <div className="game-caption">
        <div className="game-title">Game Title</div>
        <p>
          This will be some form of description of the game or something witty
          here.
        </p>
        <img src={logo_square} alt="my-logo_square" />
      </div>
    </div>
  );
}

export {
  GamePortfolioBoxes1,
  GamePortfolioBoxes2,
  GamePortfolioBoxes3,
  GamePortfolioBoxes4,
};
