//Select Element
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    //create now date
  const now = new Date();

  //get time
  const seconds = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();


    //secondHand degrees
  const secondsDegrees = ((seconds / 60) * 360 )+ 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //minHand degrees
  const minDegrees = ((min / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  //hour degrees
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


setInterval(() => {
  setDate();
}, 1000);
