"use strict";

import globalConfig from "https://stormzulien.github.io/data/global_config.js"

// const redirect = false;
const redirect = globalConfig.linksOldRedirect;
  
if (redirect) {
  const pn = window.location.pathname.replace("/links-old/", "");
  window.location.replace(`https://stormzulien.github.io/links/${pn}`);
}
