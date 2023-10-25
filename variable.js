const engagementExtensionId = "gjcfnponmdkenfdibginkmlmediekpnm"

localStorage.setItem("loadStartTimestamp", new Date().getTime().toString());
const ntpTitle = localStorage.getItem("ntpTitle");
if(ntpTitle) {
    document.title = ntpTitle
}
const link = document.getElementById("ntpFavicon");
const brand = localStorage.getItem("browserBrand");
if (link && brand) {
  link.href = `/favicons/${brand}.png`;
}

window.chrome.runtime.sendMessage({ type: "setup", payload: {} })
window.chrome.runtime.sendMessage(
  engagementExtensionId,
  {
    type: "ntpSetup",
  },
  (_result) => {}
);