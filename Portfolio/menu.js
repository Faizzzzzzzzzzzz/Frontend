document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-btn").addEventListener("click", showMenu);
  document.getElementById("close-btn").addEventListener("click", closeMenu);

  function showMenu() {
    let menu = document.querySelector("section.menu");
    menu.style.height = "100%";
  }
  function closeMenu() {
    let menu = document.querySelector("section.menu");
    menu.style.height = "0";
  }

  function addClickToMenuItems() {
    const menuItems = document.querySelectorAll("section.menu nav ul>li");
    for (let menuItem of menuItems) {
      menuItem.addEventListener("click", closeMenu);
    }
  }
  addClickToMenuItems();
});
