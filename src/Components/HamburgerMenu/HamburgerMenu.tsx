import "./HamburgerMenu.scss";
function HamburgerMenu() {
  return (
    <div className="nav-links-hamburger">
      <a href="/portfolio_2023">
        <div className="nav-element-hamburger">Home</div>
      </a>
      <a href="/portfolio_2023/web-dev">
        <div className="nav-element-hamburger">Web Dev</div>
      </a>
      <a href="/portfolio_2023/video-games">
        <div className="nav-element-hamburger">Video Games</div>
      </a>
    </div>
  );
}

export default HamburgerMenu;
