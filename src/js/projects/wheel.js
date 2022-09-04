export const wheel = () => {
  const wheel = document.querySelector(".wheel__container");

  document.querySelector(".wheel__button").addEventListener("click", (e) => {
    let deg = randomNum(370, 10000);
    let sec = randomNum(5, 10);

    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.style.transitionDuration = `${sec}s`;
    e.target.disabled = true;

    setTimeout(() => {
      reset(e, wheel, deg);
    }, sec * 1000);
  });
};

function reset(e, wheel) {
  wheel.style.transitionDuration = "0s";
  e.target.disabled = false;
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
