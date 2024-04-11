import { Link } from "react-scroll";

const NavBar = ({ setNavBarIsOpen }) => {
  return (
    <ul>
      <li>
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => {
            setNavBarIsOpen(false);
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => {
            setNavBarIsOpen(false);
          }}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => {
            setNavBarIsOpen(false);
          }}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => {
            setNavBarIsOpen(false);
          }}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
