export const scroll = () => {
  const circle = document.querySelector(".scroll__circle");
  const circle2 = document.querySelector(".scroll__circle2");
  const box = document.querySelector(".scroll");
  const inst = document.querySelector(".scroll__inst");
  const headline = document.querySelector(".scroll__headline");

  box.addEventListener("scroll", () => {
    const scroll = box.scrollTop;
    const val = scroll * 0.2;

    if (val > 40) {
      circle.classList.add("scroll__circle--ani");
    } else {
      circle.classList.remove("scroll__circle--ani");
    }

    if (val > 80) {
      circle2.classList.add("scroll__circle2--ani");
    } else {
      circle2.classList.remove("scroll__circle2--ani");
    }

    circle.style.transform = `scale(${0 + val})`;
    circle.style.opacity = 0 + val / 10;
    circle2.style.width = `${-50 + val * 4}px`;
    circle2.style.transform = `rotate(${0 + val / 2}deg)`;
    inst.style.transform = `translateY(${0 - val * 5}%)`;
    headline.style.transform = `translateX(${100 - val}%)`;
  });
};
