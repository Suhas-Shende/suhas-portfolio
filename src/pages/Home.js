import React from "react";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";

// import GithubIcon from "@material-ui/icons/GitHub";
// import profs from "../assets/illustrator-icon.png";
import pre from "../assets/pngwing.com.png"
import "../styles/Home.css";

function Home() {
  return (
    <>
    <div className="home">

      <div className="banner-container">
     
       <img className="illustrator" src={pre} alt="no img"/>
       <h1 >Hi,I am <span>Suhas Shende</span></h1>
       <h1 className="h1frontend">Frontend Developer</h1>
       <h1 className="h1frontend">React Developer</h1>
       <h1 className="h1frontend">Web Developer</h1>
      </div>
     
      </div>
   
      <div className="aboutme">
        <h1>About me</h1>
        <p>I am an information technology graduate, a fresher looking forward to greater insights, and opportunities, and building strong connections to empower and contribute my best to the community around me.</p>

        <h1>Skills</h1>
        <ol>
          <li><span className="heading">Frontend Development</span></li>
          <li><span>HTML</span></li>
          <li><span>CSS</span></li>
          <li><span>Javascript</span></li>
          <li><span>React js</span></li>
          <li><span>Redux</span></li>
          <li><span>Typescript</span></li>
        </ol>


         <ol>
          <li><span className="heading">Databases</span></li>
          <li><span>Rest API</span></li>
        </ol> 

      

      </div>

      </>
      
     
  );
}

export default Home;
