import "./WebDev.scss";
import {
  WebDevCardChatAppUI,
  WebDevCardCloneTubeUI,
  WebDevCardEverythingDash,
  WebDevCardPersonalSiteFirstTry,
  WebDevCardPersonalSiteRedo,
  WebDevCardProsite2024,
} from "./WebDevCard/WebDevCard";

function WebDev() {
  return (
    <div className="web-dev">
      <div className="multi-card-holder">
        <div className="card-container">
          <WebDevCardChatAppUI />
          <WebDevCardCloneTubeUI />
          <WebDevCardEverythingDash />
        </div>
        <div className="card-container">
          <WebDevCardProsite2024 />
          <WebDevCardPersonalSiteRedo />
          <WebDevCardPersonalSiteFirstTry />
        </div>
      </div>
    </div>
  );
}

export default WebDev;
