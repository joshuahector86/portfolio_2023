import "./WebDevCard.scss";
import { construction_image } from "../../../assets/general-assets";
import {
  web_dev_card_first_try,
  web_dev_card_krypto,
  web_dev_card_redo,
} from "../../../assets/web-dev-page-assets";
import {
  ToKryptoniumDash,
  ToPersonalSiteFirst,
  ToPersonalSiteRedo,
} from "../../../utils/WebDevData/WebDevData";
import logo from "../../../assets/general-assets/logo.jpg";

function WebDevCardExample() {
  return (
    <div id="example" className="web-dev-card">
      <img
        className="project-image"
        src={construction_image}
        alt="web-dev-project-here"
      />
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
    <div
      onClick={ToPersonalSiteRedo}
      id="personal-site-redo"
      className="web-dev-card"
    >
      <img
        className="project-image"
        src={web_dev_card_redo}
        alt="web-dev-project-here"
      />
      <div className="project-title">Personal Site Redo</div>
      <div className="web-dev-caption">
        <img src={logo} alt="my-logo" />
        by Dimitri Hector
      </div>
    </div>
  );
}
function WebDevCardPersonalSiteFirstTry() {
  return (
    <div
      onClick={ToPersonalSiteFirst}
      id="personal-site-fsrt"
      className="web-dev-card"
    >
      <img
        className="project-image"
        src={web_dev_card_first_try}
        alt="web-dev-project-here"
      />
      <div className="project-title">First Attempt Personal Site</div>
      <div className="web-dev-caption">
        <img src={logo} alt="my-logo" />
        by Dimitri Hector
      </div>
    </div>
  );
}
function WebDevCardKryptoniumDash() {
  return (
    <div onClick={ToKryptoniumDash} id="krypto-dash" className="web-dev-card">
      <img
        className="project-image"
        src={web_dev_card_krypto}
        alt="web-dev-project-here"
      />
      <div className="project-title">Kryptonium Dashboard</div>
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
