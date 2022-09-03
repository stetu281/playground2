export const header = () => {
  document.querySelector(".hamburger").addEventListener("click", (e) => {
    e.target.classList.toggle("hamburger__open");
    document.querySelector(".navigation").classList.toggle("navigation__open");
  });
};
