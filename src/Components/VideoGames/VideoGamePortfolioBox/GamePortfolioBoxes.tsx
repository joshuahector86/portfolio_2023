import "./GamePortfolioBoxes.scss";
import video_game_image from "../../../assets/video_game_photo.jpg";
import video_game_image2 from "../../../assets/game2.jpg";
import video_game_image3 from "../../../assets/game3.jpg";
import video_game_image4 from "../../../assets/game4.jpg";

import logo from "../../../assets/logo_square.jpg";

function GamePortfolioBoxes1() {
  return (
    <div className="portfolio-box">
      <div className="game-image">
        <img src={video_game_image} alt="video-game-image-here" />
      </div>
      <div className="game-caption">
        <div className="game-title">Game Title</div>
        <p>
          This will be some form of description of the game or something witty
          here.
        </p>
        <img src={logo} alt="my-logo" />
      </div>
    </div>
  );
}

function GamePortfolioBoxes2() {
  return (
    <div className="portfolio-box">
      <div className="game-image">
        <img src={video_game_image2} alt="video-game-image-here" />
      </div>
      <div className="game-caption">
        <div className="game-title">Game Title</div>
        <p>
          This will be some form of description of the game or something witty
          here.
        </p>
        <img src={logo} alt="my-logo" />
      </div>
    </div>
  );
}
function GamePortfolioBoxes3() {
  return (
    <div className="portfolio-box">
      <div className="game-image">
        <img src={video_game_image3} alt="video-game-image-here" />
      </div>
      <div className="game-caption">
        <div className="game-title">Game Title</div>
        <p>
          This will be some form of description of the game or something witty
          here.
        </p>
        <img src={logo} alt="my-logo" />
      </div>
    </div>
  );
}
function GamePortfolioBoxes4() {
  return (
    <div className="portfolio-box">
      <div className="game-image">
        <img src={video_game_image4} alt="video-game-image-here" />
      </div>
      <div className="game-caption">
        <div className="game-title">Game Title</div>
        <p>
          This will be some form of description of the game or something witty
          here.
        </p>
        <img src={logo} alt="my-logo" />
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
