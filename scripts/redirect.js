"use strict";

import globalConfig from "../../data/globalConfig";

// const redirect = true;
const redirect = globalConfig.linksOldRedirect;
  
if (redirect) {
  window.location.replace("https://stormzulien.github.io/links");
}
