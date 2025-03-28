import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import { Box, Typography, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/system';

import pfp from "../assets/images/pfpp.jpg";

const AboutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(4),
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  maxWidth: '1000px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}));

// Styled profile image with hover animation and responsiveness
const ProfileImage = styled('img')(({ theme }) => ({
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  objectFit: 'cover',
  boxShadow: '0px 8px 16px rgba(0,0,0,0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 12px 24px rgba(0,0,0,0.4)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '200px',
    height: '200px',
  },
}));

// Box for content text and social icons
const ContentBox = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

// Container for social icons with hover effects
const SocialIconsContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)',
  },
}));


function Main() {
  return (
    <div className="container">
      <div className="about-section">
        {/* 
        <div className="image-wrapper">
          <img 
            src={pfp} 
            alt="Avatar" 
            className="profile-image"
          />
        </div> 
        */}

        <div className="content">
          <div className="name-and-icons">
            <h1>Timothy Lee</h1>
            <div className="icons-inline">
              <a
                href="https://github.com/gittoit"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/timothylee47/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <p className="complex-tech">

          </p>
        </div>
      </div>

      <div className="resume-button-container">
        <a
          href="https://drive.google.com/file/d/124GbaEKd8DzL3gE4Cs8VsMCRZqLZFXG7/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
         ⭐ My Resume ⭐
        </a>
      </div>
      <Box sx={{ padding: '1rem 0' }}>

        <AboutContainer>
          <ProfileImage src={pfp} alt="Profile" />
          <ContentBox>
            <Typography variant="h4" component="h1" gutterBottom>
            💡 About Me 
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
            I am a dedicated network engineer with extensive expertise in designing and optimizing resilient infrastructures. 
            I blend automation with emerging technologies to build secure, scalable connectivity solutions, and I’m always excited to tackle new challenges together.
            </Typography>
          </ContentBox>
        </AboutContainer>

    </Box>
    </div>
  );
}

export default Main;
