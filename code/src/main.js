import {  getMinuteLeftofYear, getSecondsLeftOfYear, getTimeString } from "./clock";

const timeContainer = document.getElementById("time");
const secondsLeft = document.getElementById("seconds-left");
const minutesLeft = document.getElementById("minutes-left");

const render = () => {
  const now = new Date();
  secondsLeft.innerText = getSecondsLeftOfYear(now);
  minutesLeft.innerText = getMinuteLeftofYear();
  timeContainer.innerText = getTimeString(now);
}

render();
setInterval(render, 1000);