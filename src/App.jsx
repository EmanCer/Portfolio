import { useState } from "react";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

import Header from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  const [navBarisOpen, setNavBarIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleResize = () => {
    setNavBarIsOpen(false);
    setScreenSize(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);

  const handleClick = () => {
    setNavBarIsOpen(!navBarisOpen);
  };
  return (
    <div className="container">
      <Header
        handleClick={handleClick}
        navBarisOpen={navBarisOpen}
        setNavBarIsOpen={setNavBarIsOpen}
        screenSize={screenSize}
      />

      <main className={navBarisOpen ? "blur" : ""}>
        <HeroSection screenSize={screenSize} />
        <br />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer>
        <div className="footer-link">
          <h4>Created by Emanuele Cerreoni</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/emanuelecerreoni"
                target="_blank"
              >
                <RiLinkedinBoxFill />
              </a>
            </li>
            <li>
              <a href="https://github.com/EmanCer" target="_blank">
                <RiGithubFill />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
