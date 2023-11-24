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

function changeOpacity() {
  let tagGWithOpacity = document.querySelectorAll("g[opacity]");

  tagGWithOpacity.forEach(function (tagG) {
    let opacityCheck = parseInt(tagG.getAttribute("opacity"));

    if (opacityCheck == 0) {
      tagG.setAttribute("opacity", 1);
    } else if (opacityCheck == 1) {
      tagG.setAttribute("opacity", 0);
    }
  });
}
setInterval(changeOpacity, 1000);
