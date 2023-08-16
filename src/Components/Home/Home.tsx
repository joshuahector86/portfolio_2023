import "./Home.scss";

import { original_logo } from "../../assets/general-assets";

function Home() {
  return (
    <div className="home">
      {/* Left Side of Home Page */}
      <div className="home-photo">
        <img src={original_logo} alt="main-logo" />
      </div>
      {/* Right Side of Home Page */}
      <div className="home-right-side">
        <div className="grey-title">Software Engineer</div>
        <div className="main-title">Dimitri Hector</div>
        <p className="about-me-paragraph">
          Heyo! This is really just me messing around with various types of
          technologies and trying to make cool things out of it. Each sub
          heading in the navbar will lead you to a different type of project I
          have tried. Umbrella terms like web dev include a lot of various types
          of projects that all fall under that category. Feel free to explore
          the cacophony of tech things that held my interest for undetermined
          periods of time!
        </p>
        <div className="home-buttons">
          <a href="web-dev">
            <div className="web-dev-button">Web Dev Work</div>
          </a>
          <a href="video-games">
            <div className="video-game-button">Video Games</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
