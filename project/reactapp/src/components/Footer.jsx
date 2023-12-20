import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: rgba(33, 22, 11, 0.847);
  color: rgba(247, 220, 195, 0.847);
  padding: 20px;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
`;

const FooterLink = styled.a`
  color: rgba(247, 220, 195, 0.847);
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const SocialMediaIcons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;

  & > * {
    margin: 0 10px;
    font-size: 20px;
    color: rgba(247, 220, 195, 0.847);
    transition: color 0.3s;

    &:hover {
      color: rgba(132, 103, 75, 0.847);
    }
  }
`;

const FooterLinks2 = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: rgba(132, 103, 75, 0.847);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
        Contact Us
      <SocialMediaIcons>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </SocialMediaIcons>
      <br />

      <FooterLinks2>
        <FooterLink href="/faq">FAQ</FooterLink>
        <Link to = "/t&c">Terms and Conditions</Link>
        <Link to="/aboutus">About Us</Link>
      </FooterLinks2>
    </FooterContainer>
  );
};

export default Footer;
