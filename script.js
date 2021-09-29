"use strict";

document.addEventListener("DOMContentLoaded", start);
let elementToPaint = "none";

async function start() {
  let response = await fetch("new_balance_992-01.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  init();
}

function init() {
  console.log("init");
  document.querySelectorAll(".g_to_interact").forEach((item) => {
    item.addEventListener("click", (event) => {
      setElement(event.target);
      event.target.style.fill = "grey";
      console.log(event.target);
    });
  });

  //   document.querySelectorAll(".g_to_interact").forEach((item) => {
  //     item.addEventListener("mouseover", (event) => {
  //       event.target.style.fill = "grey";
  //     });
  //   });

  document.querySelectorAll("rect").forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(elementToPaint);
      //fill din't work as event.target.fill --> item.getAttribute("fill")); solved it
      setColor(event.target.getAttribute("fill"));
    });
  });
}

function setElement(element) {
  elementToPaint = element;
}

function setColor(color) {
  console.log(color);
  elementToPaint.style.fill = color;
}

// how to add the same colours to all of the paths in the ".g_to_interact"
// how to choose multiple targets at the same time
// how to solve hovering without it removing the previous color
