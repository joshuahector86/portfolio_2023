import "./Navbar.scss";
import { logo_background_removed } from "../../assets/general-assets";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      {/* Logo  */}
      <Link to="/portfolio_2023">
        <div className="logo">
          <img src={logo_background_removed} alt="logo" />
          <h4>
            Dim
            <p>Hector</p>
          </h4>
        </div>
      </Link>
      {/* Nav Links */}
      <div className="nav-links">
        <Link to="/portfolio_2023">
          <div className="nav-element">Home</div>
        </Link>

        <Link to="/portfolio_2023/web-dev">
          <div className="nav-element">Web Dev</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
