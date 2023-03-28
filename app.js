const toggleBtn = document.querySelector(".nav-toggle");
console.log(toggleBtn);
const links = document.querySelector(".links");
console.log(links);
toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show-link");
});
