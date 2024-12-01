import "./WebDev.scss";
import {
  WebDevCardChatAppUI,
  WebDevCardCloneTubeUI,
  WebDevCardEverythingDash,
  WebDevCardHectorgram,
  WebDevCardPersonalSiteFirstTry,
  WebDevCardPersonalSiteRedo,
  WebDevCardProsite2024,
} from "./WebDevCard/WebDevCard";

function WebDev() {
  return (
    <div className="web-dev">
      <div className="multi-card-holder">
        <div className="card-container">
          <WebDevCardHectorgram />
          <WebDevCardChatAppUI />
          <WebDevCardCloneTubeUI />
        </div>
        <div className="card-container">
          <WebDevCardEverythingDash />
          <WebDevCardProsite2024 />
          <WebDevCardPersonalSiteRedo />
        </div>
        <div className="card-container">
          <WebDevCardPersonalSiteFirstTry />
        </div>
      </div>
    </div>
  );
}

export default WebDev;
