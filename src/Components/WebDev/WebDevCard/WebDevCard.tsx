import "./WebDevCard.scss";
import web_dev_card_image from "../../../assets/kryptoniumDash.png";
import logo from "../../../assets/logo_square.jpg";
function WebDevCard() {
  return (
    <div className="web-dev-card">
      <img src={web_dev_card_image} alt="web-dev-project-here" />
      <div className="project-title">Title of Project</div>
      <div className="web-dev-caption">
        <img src={logo} alt="my-logo" />
        by Dimitri Hector
      </div>
    </div>
  );
}

export default WebDevCard;
