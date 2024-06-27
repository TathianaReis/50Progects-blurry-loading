const imgBkg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let load = 0;
let blurValue = 30;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  blurValue--;

  loadingText.innerHTML = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  imgBkg.style.filter = `blur(${scale(
    load,
    0,
    100,
    30,
    0
  )}px)`; /** If my blur was until 100 I could have used this `blur(${blurValue}px)`; */

  if (load > 99) {
    clearInterval(int); // Stop the interval when load reaches 100
  }
}

//Javascript / jQuery - map a range of numbers to another range of numbers
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
