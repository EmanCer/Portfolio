import React from "react";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiGithubFill,
} from "react-icons/ri";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";

function AboutSection() {
  return (
    <div className="about" id="about">
      <div className="aboutDescription">
        <h3>About Me</h3>
        <p>
          Hello there, I'm Emanuele, and I have a serius passion for crafting
          UI/UX experiences. It all started in 2022 when I enrolled in a WebDev
          Course, and let me tell you, it was love at first code!
        </p>
        <p>
          Since then, I've been fully immersed in frontend web development,
          constantly pushing myself to learn and grow.
        </p>
        <p>
          Now, I'm on the lookout for a place where I can take my skills to the
          next level, learn from experienced developers and get hands on
          exciting projects.
        </p>
      </div>
      <div className="aboutStack">
        <h4>Some of the technology I've used in my journey:</h4>
        <ul>
          <li>
            <RiHtml5Fill />
            Html
          </li>
          <li>
            <RiCss3Fill />
            Css / Scss / Sass
          </li>
          <li>
            <RiJavascriptFill /> Javascript (ES6+)
          </li>
          <li>
            <RiReactjsFill /> React
          </li>
          <li>
            <FaNodeJs /> Node.js
          </li>
          <li>
            <FaGitAlt /> Git
          </li>
          <li>
            <RiGithubFill /> GitHub
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutSection;
