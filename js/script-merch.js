// Event handler sidebar
const menuIcon = document.querySelector(".nav-list");
const bukaSidebar = document.getElementById("buka-sidebar");
const tutupSidebar = document.getElementById("tutup-sidebar");

document.addEventListener("click", function (event) {
  const target = event.target;

  if (target === bukaSidebar) {
    menuIcon.style.display = "block";
  } else if (target === tutupSidebar || !menuIcon.contains(target)) {
    menuIcon.style.display = "none";
  }
});

const categoryList = document.querySelector(".dropdown-category");
const categoryArrow = document.getElementById("category-arrow");

const toggleCategoryNav = () => {
  const computedStyle = window.getComputedStyle(categoryList);
  const displayValue = computedStyle.getPropertyValue("display");

  if (displayValue === "block") {
    categoryList.style.display = "none";
    categoryArrow.innerHTML = "keyboard_arrow_down";
  } else {
    categoryList.style.display = "block";
    categoryArrow.innerHTML = "keyboard_arrow_up";
  }
};

const gameroomsList = document.querySelector(".dropdown-gamerooms");
const gameroomsArrow = document.getElementById("gamerooms-arrow");

const togglegameroomsNav = () => {
  const computedStyle = window.getComputedStyle(gameroomsList);
  const displayValue = computedStyle.getPropertyValue("display");

  if (displayValue === "block") {
    gameroomsList.style.display = "none";
    gameroomsArrow.innerHTML = "keyboard_arrow_down";
  } else {
    gameroomsList.style.display = "block";
    gameroomsArrow.innerHTML = "keyboard_arrow_up";
  }
};
// end Event handler sidebar

// searching nav

const bukaNavSearch = document.querySelector(".icon-search-nav span");
const tutupNavSearch = document.querySelector(".search-nav p");
const NavSearch = document.querySelector(".search-nav");

function bukaSearchNav() {
  NavSearch.style.display = "flex";
}

function tutupSearchNav() {
  NavSearch.style.display = "none";
}

bukaNavSearch.addEventListener("click", bukaSearchNav);
tutupNavSearch.addEventListener("click", tutupSearchNav);

// end searching nav