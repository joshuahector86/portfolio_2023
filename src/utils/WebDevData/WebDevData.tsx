export const WebDevData = [
  { id: "example", url: "/web-dev" },
  { id: "personal-site-redo", url: "https://dimitrihector.com/" },
  {
    id: "personal-site-fsrt",
    url: "https://joshuahector86.github.io/professional-site/",
  },
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

function ToProSite2024() {
  OpenURLInNewTab("https://dimitrihector.com/");
}
function ToPersonalSiteFirst() {
  OpenURLInNewTab("https://joshuahector86.github.io/professional-site/");
}
function ToPersonalSiteRedo() {
  OpenURLInNewTab("https://joshuahector86.github.io/professional_site_2023/");
}

export {
  ToKryptoniumDash,
  ToPersonalSiteFirst,
  ToPersonalSiteRedo,
  ToProSite2024,
};
