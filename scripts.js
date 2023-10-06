// GSAP animations
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);

// Event listener to handle menu item clicks
const menuItems = document.querySelectorAll(".sidebar-menu__link");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    const activeMenuItem = document.querySelector(".sidebar-menu__link.active");
    if (activeMenuItem) {
      activeMenuItem.classList.remove("active");
    }
    e.target.classList.add("active");
  });
});

// Event listener to handle nav item clicks
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    const activeNavItem = document.querySelector(".nav-item.active");
    if (activeNavItem) {
      activeNavItem.classList.remove("active");
    }
    e.target.classList.add("active");
  });
});

// Click event listeners to toggle card expansion
const cards = document.querySelectorAll(".card");
const mainContent = document.querySelector(".main-content");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    document.startViewTransition(() => {
      if (!card.classList.contains("active")) {
        mainContent.classList.add("expanded");
        card.classList.add("active");
      } else {
        card.classList.remove("active");
        mainContent.classList.remove("expanded");
      }
    });
  });
});

// Theme toggling
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function toggleTheme() {
  if (themeToggle.checked) {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    localStorage.setItem("theme", "dark"); // Save theme preference
  } else {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    localStorage.setItem("theme", "light"); // Save theme preference
  }
}

themeToggle.addEventListener("change", toggleTheme);

// Initialize the theme based on user preference
const userPreferredTheme = localStorage.getItem("theme");
if (userPreferredTheme === "dark") {
  body.classList.add("theme-dark");
  themeToggle.checked = true; // Update the toggle state
} else {
  body.classList.add("theme-light");
}

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * chars.length)];
const randomString = (length) => Array.from(Array(length)).map(randomChar).join("");

const card = document.querySelector(".card.card-6.card-img"); // Select the specific card
const letters = card.querySelector(".card-letters");

function handleOnMove(e) {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  letters.style.setProperty("--x", `${x}px`);
  letters.style.setProperty("--y", `${y}px`);

  letters.innerText = randomString(1500);
}

card.addEventListener("mousemove", (e) => handleOnMove(e));

card.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

