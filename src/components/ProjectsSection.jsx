import React from "react";
("react-icons/ri");
import agendaPic from "../img/agenda.png";
import myFlixPic from "../img/myflix.png";
import suvPic from "../img/suv.png";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <div className="projects" id="projects">
      <h3>Projects</h3>
      <ProjectCard
        pic={agendaPic}
        title={"Agenda - ToDoApp"}
        description={
          "Not the usual boring todoApp, I tried to give a pleasant look, and added few features to make it more interesting. A project to solidify React foundamentals."
        }
        gitHubLink={"https://github.com/EmanCer/ReactToDoApp"}
        liveLink={"https://todoagendapp.netlify.app/"}
      />
      <ProjectCard
        pic={myFlixPic}
        title={"MyFlix - Movie App"}
        description={
          "Movie App that uses API call to TMDB to display movies informations and watch trailers. Complete of user authentication and possibility to save favorite movies."
        }
        gitHubLink={"https://github.com/EmanCer/myFlix"}
        liveLink={"https://myflix-app-movie.netlify.app/"}
      />
      <ProjectCard
        pic={suvPic}
        title={"SUV - Landing Page"}
        description={
          "Responsive and dynamic landing page for an imaginary vehicle. Built in React + Vite as a training project."
        }
        gitHubLink={"https://github.com/EmanCer/reactBasic---SUV-website"}
        liveLink={"https://suv-vehicles.netlify.app/"}
      />
    </div>
  );
}

export default ProjectsSection;
