const navbar = document.getElementById("navbar");
const panelControl = document.getElementById("panel-control");

const burguerMenu = document.getElementById("burguer-menu");
const closeBtn = document.getElementById("close-btn");

let isBurguerVisible = true;

navbar.addEventListener("click", function () {
  panelControl.classList.toggle("visible");

  if (isBurguerVisible) {
    burguerMenu.style.display = "none";
    closeBtn.style.display = "block";

  } else {
    burguerMenu.style.display = "block";
    closeBtn.style.display = "none";
  }

  isBurguerVisible = !isBurguerVisible;
});
