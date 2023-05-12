import React from 'react';
import {Sidebar} from './Sidebar';
import {TopNav} from '../layouts/TopNav';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  width: 100%;
  background-color: var(--main-background);
`;

const MainContent = styled.div`
  padding: 48px 16px;

  h1 {
    position: fixed;
    top: -8px;
    font-weight: 500;
    font-size: 26px;
    color: #4b4b4b;
  }

  @media (max-width: 768px) {
    width: 100%;

    h1 {
      display: none;
    }
  } 
`;

export const RootLayout = () => {
  return (
    <RootContainer>
      <Sidebar />
      <MainContainer>
        <TopNav />
        <MainContent>
          <Outlet />
        </MainContent>
      </MainContainer>
    </RootContainer>
  );
};
