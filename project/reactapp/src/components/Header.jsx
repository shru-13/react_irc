import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../assets/profile.gif';

const Navbar = styled.div`
  overflow: hidden;
  background-color: rgba(33, 22, 11, 0.847);
  display: flex;
  align-items: center; /* Center the content vertically */
`;

const GifImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px; /* Adjust the margin as needed */

  @media (max-width: 600px) {
    width: 30px; /* Reduce the image size on smaller screens */
  }
`;

const NavbarLink = styled(Link)`
  display: block;
  color: rgba(247, 220, 195, 0.847);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background: rgba(132, 103, 75, 0.847);
    color: black;
  }

  @media (max-width: 600px) {
    padding: 10px; /* Adjust padding for smaller screens */
    width: 100%; /* Make the links full-width on smaller screens */
    box-sizing: border-box; /* Ensure padding is included in the width */
  }
`;

function Header() {
  return (
    <div>
      <Navbar>
        <GifImage src={profile} alt="profile" />
        <NavbarLink to="/sidepanel">Menu</NavbarLink>
        <NavbarLink to="/home">Home</NavbarLink>
        <NavbarLink to="/reg">Sign Up</NavbarLink>
        <NavbarLink to="/">Sign In</NavbarLink>
      </Navbar>
    </div>
  );
}

export default Header;
