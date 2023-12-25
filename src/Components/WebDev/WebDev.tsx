import "./WebDev.scss";
import {
  WebDevCardExample,
  WebDevCardKryptoniumDash,
  WebDevCardPersonalSiteFirstTry,
  WebDevCardPersonalSiteRedo,
} from "./WebDevCard/WebDevCard";

function WebDev() {
  return (
    <div className="web-dev">
      <div className="feature-buttons">
        <button>Web Development Projects</button>
      </div>
      <div className="multi-card-holder">
        <div className="card-container">
          <WebDevCardPersonalSiteFirstTry />
          <WebDevCardPersonalSiteRedo />
          <WebDevCardKryptoniumDash />
        </div>
        <div className="card-container">
          <WebDevCardExample />
          <WebDevCardExample />
          <WebDevCardExample />
        </div>
        <div className="card-container">
          <WebDevCardExample />
          <WebDevCardExample />
          <WebDevCardExample />
        </div>
      </div>
    </div>
  );
}

export default WebDev;
