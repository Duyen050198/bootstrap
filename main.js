var hero = document.querySelector(".hero-container");
var drop = document.querySelector(".drop");
var btn = document.querySelector(".btn");
hero.addEventListener("click", function (e) {
  if (e.target.matches(".btn") || e.target.matches(".fa-bars")) {
    drop.classList.remove("d-none");
    btn.classList.add("d-none");
  }
  if (e.target.matches(".hero-container") || e.target.matches(".close span")) {
    drop.classList.add("d-none");
    btn.classList.remove("d-none");
  }
});
