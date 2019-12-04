export default function resize() {
  let el = document.getElementById("root");
  let styles = {};
  let width = window.innerWidth;
  let height = window.innerHeight;
  if (width < 1920 || height < 1080) {
    let transX = parseInt(width) / 1920;
    let transY = parseInt(height) / 1080;
    styles = {
      width: "1920px",
      height: "1080px",
      position: "absolute",
      transformOrigin: "left top", //due to UI requirements
      transform: "scale(" + transX + "," + transY + ")",
    };
    for (let key in styles) {
      el.style[key] = styles[key];
    }
  } else {
    el.removeAttribute("style");
  }
}
window.onresize = resize;
