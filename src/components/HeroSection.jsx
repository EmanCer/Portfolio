import React from "react";
import { motion } from "framer-motion";

function HeroSection({ screenSize }) {
  return (
    <motion.div
      animate={{ x: [100, 0] }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className="hero"
      id="hero"
    >
      <div className="heroLeft">
        <p className="intro">Hi, this is</p>
        <h1>Emanuele Cerreoni</h1>
        <h2>
          <span className="accent">Frontend</span> WebDeveloper
        </h2>
        <p className="heroDescription">
          I'm building Web Sites, with an eye to appealing designs and
          responsiveness.
        </p>
        <a href="mailto:emanuele.cerreoni@outlook.com" target="_blank">
          <button className="btn">Contact me</button>
        </a>
      </div>
      {screenSize >= 1025 ? (
        <div className="heroRight">
          <div className="heroImg"></div>
        </div>
      ) : (
        ""
      )}
    </motion.div>
  );
}

export default HeroSection;
