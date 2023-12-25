import "./Navbar.scss";
import { logo_background_removed } from "../../assets/general-assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerOrX, setHamburgerOrX] = useState(true);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
    setHamburgerOrX(!hamburgerOrX);
  }

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

        {/* <Link to="/portfolio_2023/video-games">
          <div className="nav-element">Video Games</div>
        </Link> */}
      </div>
      {menuOpen ? <HamburgerMenu /> : ""}
      <div className="hamburger-menu" onClick={toggleMenu}>
        {hamburgerOrX ? <GiHamburgerMenu /> : <MdOutlineClose />}
      </div>
    </div>
  );
}

export default Navbar;
