import React from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import NavBar from "./NavBar";

const Header = ({ handleClick, navBarisOpen, setNavBarIsOpen, screenSize }) => {
  return (
    <header>
      <div className="logo">
        <a href="/">EC</a>
      </div>
      <nav className="navBar">
        {screenSize <= 641 ? (
          <div className="asideNavBar">
            <button onClick={handleClick}>
              {navBarisOpen ? <RiCloseFill /> : <RiMenu3Fill />}
            </button>
            <aside className={navBarisOpen ? "open" : ""}>
              <NavBar
                navBarisOpen={navBarisOpen}
                setNavBarIsOpen={setNavBarIsOpen}
              />
            </aside>
          </div>
        ) : (
          <div className="mainNavBar">
            <NavBar
              navBarisOpen={navBarisOpen}
              setNavBarIsOpen={setNavBarIsOpen}
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
