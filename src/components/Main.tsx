import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../assets/styles/Main.scss";
import pfp from "../assets/images/pfp.jpg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img 
            src={pfp} 
            alt="Avatar" 
            className="profile-image"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/gittoit" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/timothylee47/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <h1>Timothy Lee</h1>
          <p>Network Architect & Full Stack Engineer</p>
        </div>
      </div>

      <div className="resume-button-container">
        <a 
          href="https://drive.google.com/file/d/124GbaEKd8DzL3gE4Cs8VsMCRZqLZFXG7/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Check Resume
        </a>
      </div>
    </div>
  );
}

export default Main;
