"use strict";

const showMsg = true;

let newMsgShown = JSON.parse(localStorage.getItem("newMsgShown")) || false;

if (window.location.pathname === "/links-old/" && !newMsgShown && showMsg) {
  document.querySelector("body").innerHTML += `
    <div id="new-msg">
      <a href="https://stormzulien.github.io/links/" target="_parent">Go to the updated (better) version of this page :D</a>
      <button title="Dismiss message" id="new-msg-close-btn">
        <img src="/images/close.svg" alt="Close icon" draggable="false">
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