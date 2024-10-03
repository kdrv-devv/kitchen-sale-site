const bars2 = document.querySelector(".bars2");

const mark = document.querySelector(".mark");
const nav__links = document.querySelector(".nav__links");

bars2.addEventListener("click", () => {
  nav__links.classList.toggle("active");
});

mark.addEventListener("click", () => {
  nav__links.classList.toggle("active");
});
