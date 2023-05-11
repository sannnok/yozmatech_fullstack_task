import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 240px;
  height: 100vh;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.1) 7px -2px 12px 0px;
  padding: 1em;

  @media (max-width: 768px) {
    transition: transform 0.4s ease;
    position: fixed;
    background: white;
  } 
`;

const NavWrapper = styled.div`
  @media (max-width: 768px) {
    .closed {
      transform: translateX(-100%);
    }
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LogoPlaceholder = styled.div`
  width: 100%;
  height: 50px;
  background: #ededed;
  border-radius: 5px;
`;

const StyledLink = styled(NavLink)`
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  margin-bottom: 10px;
  
  &.active {
    color: #8695a5;
    border-left: 3px solid #626262;
  }
`;

export const Sidebar = () => {
  return (
    <NavWrapper>
      <Nav className="closed">
        <LogoPlaceholder/>
        <hr/>
        <NavList>
          <StyledLink to="/dashboard">Dashboard</StyledLink>
          <StyledLink to="/user-profile">User Profile</StyledLink>
          <StyledLink to="/table-list">Table List</StyledLink>
        </NavList>
      </Nav>
    </NavWrapper>
  );
};
