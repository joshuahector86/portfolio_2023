import "./Navbar.scss";
import logo from "../../assets/general-assets/logo_2.png";
function Navbar() {
  return (
    <div className="navbar">
      {/* Logo  */}
      <div className="logo">
        <img src={logo} alt="logo" />
        <h4>
          Dim
          <p>Hector</p>
        </h4>
      </div>
      {/* Nav Links */}
      <div className="nav-links">
        <a href="/">
          <div className="nav-element">Home</div>
        </a>
        <a href="video-games">
          <div className="nav-element">Video Games</div>
        </a>
        <a href="web-dev">
          <div className="nav-element">Web Dev</div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
