/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navbarList = document.getElementById("navbar__list");
const navbarMenu = document.querySelector(".navbar__menu");
const sections = document.querySelectorAll("section");
const header = document.querySelector(".page__header");
const btn = document.getElementById("button");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNav() {
  // forEach to loop for each section
  sections.forEach((sec) => {
    // Creating new elements - li and a
    const itemList = document.createElement("li");
    const itemLink = document.createElement("a");
    // Adding class and attributes to a
    itemLink.classList.add("menu__link");
    itemLink.href = `#${sec.getAttribute("id")}`;
    itemLink.innerHTML = sec.getAttribute("data-nav");
    // Creating smooth scrolling when clicking on section element in the menu bar
    // Scroll to anchor ID using scrollIntoView event
    itemLink.addEventListener("click", (e) => {
      e.preventDefault();
      sec.scrollIntoView({
        behavior: "smooth",
      });
    });
    // Appending anchor to list items
    itemList.appendChild(itemLink);
    // Appending list items to unordered list
    navbarList.appendChild(itemList);
  });
}

// Add class 'active' to section when near top of viewport
function active() {
  sections.forEach((section) => {
    if (
      // Using getBoundingClientRect() to toggle active class based on scrolling into and out of each section.
      section.getBoundingClientRect().top > -150 &&
      section.getBoundingClientRect().top < 400
    ) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}

// Add back to top button

window.onscroll = function () {
  if (window.scrollY > 200) {
    btn.style.cssText =
      "display: block; font-size: 20px; position: fixed; right:20px; bottom: 20px; border: none; z-index: 1; border-radius: 50px;";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
buildNav();

// Set sections as active
document.addEventListener("scroll", function () {
  active();
});

// Scroll to top button
