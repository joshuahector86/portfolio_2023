import "./GamePortfolioBoxes.scss";
import video_game_image from "../../../assets/video_game_photo.jpg";
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
  return <div>GamePortfolioBoxes2</div>;
}

export { GamePortfolioBoxes1, GamePortfolioBoxes2 };
