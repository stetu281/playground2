export const gradient = () => {
  const css = document.querySelector(".gradient__code");
  const box = document.querySelector(".gradient");

  const code = generateColor();

  box.style.backgroundImage = code;
  css.innerHTML = `background: ${code}`;

  document.querySelector(".gradient__button").addEventListener("click", () => {
    const code = generateColor();
    box.style.backgroundImage = code;
    css.innerHTML = `background: ${code}`;
  });
};

function randomNum(min = 0, max = 255) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Create Array with angle and color
function generateColor() {
  const arr = [];
  arr.push(randomNum(0, 360));

  for (let i = 0; i < 6; i++) {
    arr.push(randomNum());
  }

  const color1 = `rgb(${arr[1]}, ${arr[2]}, ${arr[3]})`;
  const color2 = `rgb(${arr[4]}, ${arr[5]}, ${arr[6]})`;

  return `linear-gradient(${arr[0]}deg, ${color1}, ${color2})`;
}
