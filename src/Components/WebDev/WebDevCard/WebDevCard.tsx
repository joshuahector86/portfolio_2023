import "./WebDevCard.scss";
import { construction_image } from "../../../assets/general-assets";
import {
  web_dev_card_first_try,
  web_dev_card_prosite2024,
  web_dev_card_redo,
  web_dev_card_everythingdash,
  web_dev_card_clonetubeui,
} from "../../../assets/web-dev-page-assets";
import {
  ToCloneTube,
  ToEverythingDash,
  ToPersonalSiteFirst,
  ToPersonalSiteRedo,
  ToProSite2024,
} from "../../../utils/WebDevData/WebDevData";
import logo from "../../../assets/general-assets/logo.jpg";
import { useStoreUnderConstructionDialog } from "../../../ZustandStores/UnderConstructionDialogStore";
import UnderConstructionDialog from "../../DialogBoxes/UnderConstructionDialog";

//----------------------------------------Web Dev Cards------------------------------------//

//----------------------------------------CloneTubeUI------------------------------------//

function WebDevCardCloneTubeUI() {
  return (
    <div onClick={ToCloneTube} id="krypto-dash" className="web-dev-card">
      <img
        className="project-image"
        src={web_dev_card_clonetubeui}
        alt="Corporate-dash"
      />
      <div className="project-title">CloneTube UI</div>
      <div className="web-dev-caption">
        <img src={logo} alt="my-logo" />
        by Dimitri Hector
      </div>
    </div>
  );
}

//----------------------------------------Coporate Dashboard------------------------------------//

function WebDevCardEverythingDash() {
  return (
    <div onClick={ToEverythingDash} id="krypto-dash" className="web-dev-card">
      <img
        className="project-image"
        src={web_dev_card_everythingdash}
        alt="Corporate-dash"
      />
      <div className="project-title">Everthing Dashboard</div>
      <div className="web-dev-caption">
        <img src={logo} alt="my-logo" />
        by Dimitri Hector
      </div>
    </div>
  );
}

//----------------------------------------Web Dev Example------------------------------------//

function WebDevCardExample() {
  //Under Construction Dialog Box Logic
  const constructionDialogIsOpen = useStoreUnderConstructionDialog(
    (state) => state.dialogIsOpen
  );
  const setConstructionDialogIsOpen = useStoreUnderConstructionDialog(
    (state) => state.setDialogIsOpen
  );
  function ToggleConstruction() {
    setConstructionDialogIsOpen(!constructionDialogIsOpen);
    console.log("i made it here");
  }
  return (
    <div onClick={ToggleConstruction} id="example" className="web-dev-card">
      {/*  Boolean Check for Toggle State */}
      {constructionDialogIsOpen ? <UnderConstructionDialog /> : ""}
      <img
        className="project-image"
        src={construction_image}
        alt="web-dev-project-here"
      />
      <div className="project-title">Place Holder Project</div>
      <div className="web-dev-caption">
        <img src={logo} alt="my-logo" />
        by Dimitri Hector
      </div>
    </div>
  );
}

//----------------------------------------Personal Site Redo------------------------------------//

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
      <div className="project-title">Personal Site 2023</div>
      <div className="web-dev-caption">
        <img src={logo} alt="my-logo" />
        by Dimitri Hector
      </div>
    </div>
  );
}

//----------------------------------------Personal Site First Try------------------------------------//

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

//----------------------------------------Prosite 2024------------------------------------//

function WebDevCardProsite2024() {
  return (
    <div onClick={ToProSite2024} id="krypto-dash" className="web-dev-card">
      <img
        className="project-image"
        src={web_dev_card_prosite2024}
        alt="web-dev-project-here"
      />
      <div className="project-title">Personal Site 2024</div>
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
  WebDevCardProsite2024,
  WebDevCardEverythingDash,
  WebDevCardCloneTubeUI,
};
