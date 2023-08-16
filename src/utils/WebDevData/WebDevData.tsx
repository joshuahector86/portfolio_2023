export const WebDevData = [
  { id: "example", url: "/web-dev" },
  { id: "personal-site-redo", url: "https://dimitrihector.com/" },
  { id: "personal-site-fsrt", url: "https://joshuahector.com/" },
  {
    id: "krypto-dash",
    url: "https://joshuahector86.github.io/crypto-dashboard-remake/",
  },
];

// Avoids security issue with just using '_blank'
const OpenURLInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
// URL onClcik functions
function ToKryptoniumDash() {
  OpenURLInNewTab("https://joshuahector86.github.io/crypto-dashboard-remake/");
}

function ToPersonalSiteFirst() {
  OpenURLInNewTab("https://joshuahector.com/");
}
function ToPersonalSiteRedo() {
  OpenURLInNewTab("https://dimitrihector.com");
}

export { ToKryptoniumDash, ToPersonalSiteFirst, ToPersonalSiteRedo };
