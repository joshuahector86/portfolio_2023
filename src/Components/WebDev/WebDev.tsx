import "./WebDev.scss";
import {
  WebDevCardExample,
  WebDevCardKryptoniumDash,
  WebDevCardPersonalSiteFirstTry,
  WebDevCardPersonalSiteRedo,
  WebDevCardProsite2024,
} from "./WebDevCard/WebDevCard";

function WebDev() {
  return (
    <div className="web-dev">
      <div className="multi-card-holder">
        <div className="card-container">
          <WebDevCardProsite2024 />
          <WebDevCardPersonalSiteRedo />
          <WebDevCardPersonalSiteFirstTry />
        </div>
        <div className="card-container">
          <WebDevCardKryptoniumDash />
          <WebDevCardExample />
          <WebDevCardExample />
        </div>
        <div className="card-container-bottom">
          <WebDevCardExample />
          <WebDevCardExample />
          <WebDevCardExample />
        </div>
      </div>
    </div>
  );
}

export default WebDev;
