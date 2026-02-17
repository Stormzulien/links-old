"use strict";

// import globalConfig from "https://stormzulien.github.io/data/global_config.js";
import globalConfig from "../../data/global_config.js";

// const redirect = false;
const redirect = globalConfig.linksOldRedirect;

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
