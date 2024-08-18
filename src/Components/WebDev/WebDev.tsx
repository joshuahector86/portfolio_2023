import "./WebDev.scss";
import {
  WebDevCardEverythingDash,
  WebDevCardExample,
  WebDevCardPersonalSiteFirstTry,
  WebDevCardPersonalSiteRedo,
  WebDevCardProsite2024,
} from "./WebDevCard/WebDevCard";

function WebDev() {
  return (
    <div className="web-dev">
      <div className="multi-card-holder">
        <div className="card-container">
          <WebDevCardEverythingDash />
          <WebDevCardProsite2024 />
          <WebDevCardPersonalSiteRedo />
        </div>
        <div className="card-container">
          <WebDevCardPersonalSiteFirstTry />
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
