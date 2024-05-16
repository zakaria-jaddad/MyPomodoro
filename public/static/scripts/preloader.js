import getDataFromLocalStorage from "../../../src/app/util/localStorage/getDataFromLocalStorage";
import "../styles/preloader.css";

(function () {
  document.body.style.margin = "0px"
  function getCurrentThemeColors(themeSettings) {
    if (themeSettings !== null) {
      return {
        "main-bg-color": themeSettings.themeColors["main-bg-color"],
        "main-text-color": themeSettings.themeColors["main-text-color"],
      };
    }
    return {
      "main-bg-color":
        document.documentElement.style.getPropertyValue("--main-bg-color"),
      "main-text-color":
        document.documentElement.style.getPropertyValue("--main-text-color"),
    };
  }

  const themeSettings = getDataFromLocalStorage("theme", null);
  const themeColors = getCurrentThemeColors(themeSettings);

  const cubeFaces = document.querySelectorAll(".cube-face");
  cubeFaces.forEach((cubeFace) => {
    Object.assign(cubeFace.style, {
      backgroundColor: themeColors["main-bg-color"],
      border: `1px solid ${themeColors["main-text-color"]}`,
    });
  });

  const preloader = document.getElementById("preloader");
  document.documentElement.style.backgroundColor = themeColors["main-bg-color"];
  Object.assign(preloader.firstElementChild.style, {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    width: "100%",
    height: "100%",
  });
  Object.assign(preloader.style, {
    "z-index": "20",
    display: "block",
    width: "100vw",
    height: "100vh",
    position: "absolute",
    inset: "0",
    "font-size": "150px",
    "font-family": "Arial, Helvetica, sans-serif",
  });
  window.addEventListener("load", () => {
    preloader.remove();
  });
})();
