import {  getMinutesLeftofYear, getSecondsLeftOfYear, getTimeString } from "./clock";

const timeContainer = document.getElementById("time");
const secondsLeft = document.getElementById("seconds-left");
const minutesLeft = document.getElementById("minutes-left");
const catFact = document.getElementById("cat-fact");


async function fetchCatFact(){
  try {

    const response = await fetch("https://catfact.ninja/fact");

    const object = await response.json();

    console.log(`Server response: '${JSON.stringify(object.fact)}'`);
    
    return JSON.stringify(object.fact);
  } catch (e) {
    console.log("Error" + e.message)    
  }
}




const render = async () => {
  const now = new Date();
  secondsLeft.innerText = getSecondsLeftOfYear(now);
  minutesLeft.innerText = getMinutesLeftofYear(now);
  timeContainer.innerText = getTimeString(now);
  catFact.innerHTML = await fetchCatFact();
}

render();
setInterval(render, 10000);




