import "./WebDev.scss";
import {
  WebDevCardCloneTubeUI,
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
          <WebDevCardCloneTubeUI />
          <WebDevCardEverythingDash />
          <WebDevCardProsite2024 />
        </div>
        <div className="card-container">
          <WebDevCardPersonalSiteRedo />
          <WebDevCardPersonalSiteFirstTry />
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
