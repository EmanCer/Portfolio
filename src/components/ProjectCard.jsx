import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { RiHtml5Fill, RiCss3Fill, RiReactjsFill } from "react-icons/ri";

function ProjectCard({ pic, title, description, gitHubLink, liveLink }) {
  return (
    <div className="project">
      <div className="projectImg">
        <img src={pic} alt={title + " project thumbnail"} />
      </div>
      <div className="projectDescription">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="projectLink">
          <a href={gitHubLink} target="_blank">
            <FaGithub />
          </a>
          <a href={liveLink} target="_blank">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
