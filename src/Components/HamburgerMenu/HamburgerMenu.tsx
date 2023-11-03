import { Link } from "react-router-dom";
import "./HamburgerMenu.scss";
function HamburgerMenu() {
  return (
    <div className="nav-links-hamburger">
      <Link
        style={{ textDecoration: "none", color: "grey" }}
        to="/portfolio_2023"
      >
        Home
      </Link>

      <Link
        style={{ textDecoration: "none", color: "grey" }}
        to="/portfolio_2023/web-dev"
      >
        Web Dev
      </Link>

      <Link
        style={{ textDecoration: "none", color: "grey" }}
        to="/portfolio_2023/video-games"
      >
        Video Games
      </Link>
    </div>
  );
}

export default HamburgerMenu;
