import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
      style={{backgroundColor:"pink"}}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1 style={{color:"red"}}> {name} </h1>
    </div>
  );
}

export default ProjectItem;
