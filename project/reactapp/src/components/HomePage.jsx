// LandingPage.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import videoBackground from '../assets/homebg.mp4';

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const ContentOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: rgba(247, 220, 195, 0.847); // Text color on top of the video background
  background: rgba(0, 0, 0, 0); // Fully transparent overlay
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
`;

const Button = styled.div`
    a{
        text-decoration: none;
        color: #fff
    }
  padding: 10px 20px;
  background-color: rgba(33, 22, 11, 0.847);
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(132, 103, 75, 0.847);
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <VideoBackground autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </VideoBackground>
      <ContentOverlay>
        <Title>Employee Management System</Title>
        <Description>
          Streamline your workforce management with our powerful and easy-to-use Employee Management System.
        </Description>
        <Button>
        <Link to ="/sidepanel">Get Started</Link>
        </Button>
      </ContentOverlay>
    </Container>
  );
};

export default LandingPage;
