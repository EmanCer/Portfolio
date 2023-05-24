"use strict";

// const btnToggle = document.querySelector(".nav-toggle");
// const navBar = document.querySelector(".nav-bar");
// const hamburger = document.querySelector(".hamburger");

// btnToggle.addEventListener("click", function () {
// 	navBar.classList.toggle("active");
// 	hamburger.classList.toggle("is-open");
// 	console.log("clicked");
// });
const languagesFlags = document.querySelectorAll(".lang");
const toggleBtn = document.querySelector(".toggle-btn").firstChild;
const mainNav = document.querySelector(".main-nav");
const windowWidth = window.innerWidth.addEventListener;

const switchLanguage = (el) => {
	languagesFlags.forEach((lang) => lang.classList.remove("selected-lang"));
	el.classList.add("selected-lang");
};

const toggleIconSwitch = () => {
	toggleBtn.classList = "fa-solid fa-bars";
};

languagesFlags.forEach((div) =>
	div.addEventListener("click", function (e) {
		e.preventDefault();
		switchLanguage(this);
	})
);

toggleBtn.addEventListener("click", function () {
	mainNav.classList.toggle("open");
	const isOpen = mainNav.classList.contains("open");
	toggleBtn.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

document.addEventListener("click", function (e) {
	if (!toggleBtn.contains(e.target) && !mainNav.contains(e.target)) {
		mainNav.classList.remove("open");
		toggleIconSwitch();
	}
});

window.addEventListener("resize", () => {
	mainNav.classList.remove("open");
	toggleIconSwitch();
});
