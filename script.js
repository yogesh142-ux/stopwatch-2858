const display = document.querySelector(".timer");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const lap = document.querySelector(".lap");
const ul = document.querySelector(".ul");

let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let timer = null;
let lapCount = 1;

function updateDisplay() {
  let h = hr < 10 ? "0" + hr : hr;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  let msFormatted = ms < 10 ? "0" + ms : ms;

  display.textContent = `${h}:${m}:${s}:${msFormatted}`;
}

function runTimer() {
  ms++;
  if (ms === 100) {
    sec++;
    ms = 0;
  }
  if (sec === 60) {
    min++;
    sec = 0;
  }
  if (min === 60) {
    hr++;
    min = 0;
  }
  updateDisplay();
}

start.addEventListener("click", function () {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(runTimer, 10);
});

stop.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
});

reset.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  hr = 0;
  min = 0;
  sec = 0;
  ms = 0;
  lapCount = 1;
  updateDisplay();
  ul.innerHTML = "";
});

lap.addEventListener("click", function () {
  if (timer !== null) {
    const li = document.createElement("li");
    li.textContent = `Lap ${lapCount++}: ${display.textContent}`;
    ul.append(li);
  }
});
