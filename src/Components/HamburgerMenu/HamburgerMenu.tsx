import "./HamburgerMenu.scss";
function HamburgerMenu() {
  return (
    <div className="nav-links-hamburger">
      <a href="/">
        <div className="nav-element-hamburger">Home</div>
      </a>
      <a href="web-dev">
        <div className="nav-element-hamburger">Web Dev</div>
      </a>
      <a href="video-games">
        <div className="nav-element-hamburger">Video Games</div>
      </a>
    </div>
  );
}

export default HamburgerMenu;
