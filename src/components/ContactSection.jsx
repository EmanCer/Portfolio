import React from "react";

function ContactSection() {
  return (
    <div className="contact section" id="contact">
      <h3></h3>
      <h3>I'm ready for new Opportunities</h3>
      <p>
        Would like to know me better, do you have more questions? Then feel free
        to contact me. Or you can visit my Linkedin profile and we can have a
        chat!{" "}
      </p>
      <a href="mailto:emanuele.cerreoni@outlook.com" target="_blank">
        <button className="btn">Contact me</button>
      </a>
    </div>
  );
}

export default ContactSection;
