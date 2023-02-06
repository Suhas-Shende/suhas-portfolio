import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="no imag"/>
      <div className="project-info">
      <p>
        <b>Project Name:</b> {project.name}
      </p>
      <p>
        <b>Technology:</b> {project.skills}
      </p>
      <p><b> Description:</b> {project.description}</p>
      </div>
      <div className="Inlistp">
        <button  className="button-github"><a href={project.website}>Live project</a></button>
        <button className="button-github"><a href={project.github}>view source</a></button>
      </div>
    </div>
  );
}

export default ProjectDisplay;
