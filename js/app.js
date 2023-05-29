"use strict";

const languagesFlags = document.querySelectorAll(".lang");
const toggleBtn = document.querySelector(".toggle-btn").firstChild;
const mainNav = document.querySelector(".main-nav");
const pageContent = document.querySelector(".main");
const originalMainNav = mainNav.innerHTML;
const orginalPageContent = pageContent.innerHTML;

// -------- Change Language -----------

// Change highlight of flag element
const switchFocus = (el) => {
	languagesFlags.forEach((lang) => lang.classList.remove("selected-lang"));
	el.classList.add("selected-lang");

	if (el.classList.contains("it-lang")) {
		mainNav.innerHTML = `
			<ul class="links">
				<li><a href="hero" class="nav-link">Home</a></li>
				<li><a href="about" class="nav-link">chi sono</a></li>
				<li><a href="projects" class="nav-link">Progetti</a></li>
				<li><a href="contact" class="nav-link">Contatti</a></li>
			</ul>
			`;
		pageContent.innerHTML = `
		<div id="hero" class="section section-hero">
		<div class="hero-text">
			<h1>Ciao! Sono Emanuele<br><span class="accent">Front-end Developer</span></h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quod quisquam, incidunt fuga eligendi esse totam officiis, dolor illo eum rerum veritatis eos aliquid a commodi. Nulla ullam aperiam et.</p>
		<div class="btn-section">
			<button class="btn">Scopri di più</button>
			<button class="btn">Vedi progetti</button>
		</div>
		</div>
		<div class="hero-img">
			<h1>Anche questo Cambia in italiano<br><span class="accent">Daje tutta</span></h1>
		<p>e qui inserisco del testo diverso così si vede cosa cambia rispetto alla versione in inglese.</p>
		</div>
	</div>

	
	<div id="about" class="section section-about">
		<h2>Su di me:</h2>
		<p>Ciao, sono Emanuele, appassionato di tecnologia, che ha deciso di intraprendere una carriera nell'IT, nello specifico come Front-end Dev. Attraverso la partecipazione ad un corso formativo della durata di 6 mesi nel 2022, ho imparato le basi della programmazione, e da allora ho dedicato tutto il mio tempo per continuare ad apprendere, attraverso un percorso autodidatta ma più approfondito, tutti gli aspetti fondamentali per prepararmi al meglio alla mia prima esperienza in questo ambito. Curioso e molto disposto nel continuare ad imparare, cerco un'azienda disposta a scommettere su di me e le mie abilità
		</p>
	</div>
	
	<div class="section section-projects">

	</div>

</div>
		`;
	}
	if (el.classList.contains("en-lang")) {
		mainNav.innerHTML = originalMainNav;
		pageContent.innerHTML = orginalPageContent;
	}
};

languagesFlags.forEach((el) => {
	el.addEventListener("click", () => switchFocus(el));
});

// -------- Navbar -------

// Toggle icon
const toggleIconSwitch = () => {
	toggleBtn.classList = "fa-solid fa-bars";
};

toggleBtn.addEventListener("click", function () {
	mainNav.classList.toggle("open");
	const isOpen = mainNav.classList.contains("open");
	toggleBtn.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// Close nav on click outside
document.addEventListener("click", function (e) {
	if (!toggleBtn.contains(e.target) && !mainNav.contains(e.target)) {
		mainNav.classList.remove("open");
		toggleIconSwitch();
	}
});

// Close nav on resize of page
window.addEventListener("resize", () => {
	mainNav.classList.remove("open");
	toggleIconSwitch();
});

// ------------------- Cards slider --------------
let widthDoc = window.innerWidth;
console.log(widthDoc);
