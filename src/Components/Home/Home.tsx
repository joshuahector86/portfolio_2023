import "./Home.scss";

import logo_original from "../../assets/logo.jpg";

function Home() {
  return (
    <div className="home">
      {/* Left Side of Home Page */}
      <div className="home-photo">
        <img src={logo_original} alt="main-logo" />
      </div>
      {/* Right Side of Home Page */}
      <div className="home-right-side">
        <div className="grey-title">Software Engineer</div>
        <div className="main-title">Dimitri Hector</div>
        <p className="about-me-paragraph">
          lLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi
          libero, semper vel finibus in, malesuada nec libero. Mauris ultrices
          diam sed felis condimentum sagittis. Nulla fermentum ultrices rhoncus.
          Vivamus pharetra turpis dui, eu vestibulum mi accumsan non. Maecenas
          sit amet nisi magna. Morbi sodales, justo a feugiat sodales, turpis
          tellus interdum magna, id tempus metus dolor id est. Donec laoreet
          ornare consequat.
        </p>
        <div className="home-buttons">
          <div className="web-dev-button">Web Dev Work</div>
          <div className="video-game-button">Video Games</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
