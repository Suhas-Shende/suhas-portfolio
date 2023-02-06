import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import "../styles/Footer.css";
import EmailIcon from "@material-ui/icons/Email";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
         <div className="Inlist">
           <EmailIcon/>
           <p>suhas.shende19@gmail.com</p>
          
            
          
          </div>
          <div className="Inlist">
          <WhatsAppIcon /><p>+91 8806441344</p>        </div>
          <ul>
          
            <li><a href="https://github.com/Suhas-Shende">Github</a></li>
            <li><a href="https://www.linkedin.com/in/suhas-shende-b46455213/">Linkedin</a></li>
            <li><a href="bh">Twitter</a></li>
          </ul>
      </div>
   
    </div>
  );
}

export default Footer;
