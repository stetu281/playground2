export const guitar = () => {
  const vid = document.querySelector(".guitar__video");
  const bg = document.querySelector(".guitar__bg");
  const h3 = document.querySelector(".guitar__h3");
  const h2 = document.querySelector(".guitar__h2");

  const bgObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          vid.play();
          bg.classList.add("guitar__bg--slideIn");
          h3.classList.add("guitar__h3--clearup");
          h2.classList.add("guitar__h2--animate");
        } else {
          vid.currentTime = 0;
          bg.classList.remove("guitar__bg--slideIn");
          h3.classList.remove("guitar__h3--clearup");
          h2.classList.remove("guitar__h2--animate");
        }
      });
    },
    { threshold: 0 }
  );
  bgObserver.observe(vid);

  document.querySelector(".guitar__btn").addEventListener("click", () => {
    bg.classList.remove("guitar__bg--slideIn");
    h3.classList.remove("guitar__h3--clearup");
    h2.classList.remove("guitar__h2--animate");
    vid.currentTime = 0;
    setTimeout(() => {
      vid.play();
      bg.classList.add("guitar__bg--slideIn");
      h3.classList.add("guitar__h3--clearup");
      h2.classList.add("guitar__h2--animate");
    }, 200);
  });
};
