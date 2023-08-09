import "./WebDev.scss";
import WebDevCard from "./WebDevCard/WebDevCard";

function WebDev() {
  return (
    <div className="web-dev">
      <div className="feature-buttons">
        <button>Featured</button>
        <button>All</button>
      </div>
      <div className="multi-card-holder">
        <div className="card-container">
          <WebDevCard />
          <WebDevCard />
          <WebDevCard />
        </div>
        <div className="card-container">
          <WebDevCard />
          <WebDevCard />
          <WebDevCard />
        </div>
        <div className="card-container">
          <WebDevCard />
          <WebDevCard />
          <WebDevCard />
        </div>
      </div>
    </div>
  );
}

export default WebDev;
