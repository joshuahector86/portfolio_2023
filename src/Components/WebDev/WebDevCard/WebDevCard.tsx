import "./WebDevCard.scss";
import web_dev_card_image from "../../../assets/web-dev-page-assets/kryptoniumDash.png";
import logo from "../../../assets/general-assets/logo.jpg";

function WebDevCardExample() {
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

function WebDevCardPersonalSiteRedo() {
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
function WebDevCardPersonalSiteFirstTry() {
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
function WebDevCardKryptoniumDash() {
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

export {
  WebDevCardExample,
  WebDevCardPersonalSiteRedo,
  WebDevCardPersonalSiteFirstTry,
  WebDevCardKryptoniumDash,
};
