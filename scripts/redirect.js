"use strict";

// import globalConfig from "https://stormzulien.github.io/data/global_config.js";
import globalConfig from "../../data/global_config.js";

// const redirect = false;
const redirect = globalConfig.linksOldSettings.redirectToNew;

if (redirect) {
  // document.querySelector("body").innerHTML += `
  //   <div id="redirect-overlay">
  //     <span>Redirecting to newer page...</span>
  //   </div>
  // `;

  // const redirectOverlay = document.querySelector("#redirect-overlay");
  // redirectOverlay.classList.add("hidden");
  
  const pn = window.location.pathname.replace("/links-old/", "");
  console.warn(`Redirecting to: https://stormzulien.github.io/links/${pn}`);
  window.location.replace(`https://stormzulien.github.io/links/${pn}`);
  
} else {
  const redirectOverlay = document.querySelector("#redirect-overlay");
  redirectOverlay.classList.add("hidden");
}

let newMsgShown = JSON.parse(localStorage.getItem("newMsgShown")) || false

if (window.location.pathname === "/links-old/" && !newMsgShown && globalConfig.linksOldSettings.showUpdateMsg) {
  document.querySelector("body").innerHTML += `
    <div id="new-msg">
      <a href="https://stormzulien.github.io/links/" target="_blank">Go to the updated (better) version of this page :D</a>
      <button title="Dismiss message" id="new-msg-close-btn">
        <img src="./images/close.svg" alt="Close icon" draggable="false">
      </button>
    </div>
  `;

  document.querySelector("#new-msg-close-btn")
    .addEventListener("click", () => {
      newMsgShown = true;
      localStorage.setItem("newMsgShown", JSON.stringify(newMsgShown));
      document.querySelector("#new-msg").remove();
    });
}