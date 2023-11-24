function changeOnScroll() {
  let header = document.querySelector("header");
  let button = document.querySelector("header button.getStarted");
  let targetY = 530;

  let posY = window.scrollY;

  if (posY > targetY) {
    header.setAttribute("data-scrolled", "true");
    button.setAttribute("data-scrolled", "true");
  } else {
    header.removeAttribute("data-scrolled");
    button.removeAttribute("data-scrolled");
  }
}
document.addEventListener("scroll", changeOnScroll);
