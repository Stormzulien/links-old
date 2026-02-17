"use strict";

const redirect = true;
  
if (redirect) {
  const pn = window.location.pathname.replace("/links-old/", "");
  window.location.replace(`https://stormzulien.github.io/links/${pn}`);
}
