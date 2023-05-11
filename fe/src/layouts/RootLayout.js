import React from 'react';
import {Sidebar} from '../components/Sidebar';
import {TopNav} from '../components/TopNav';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  width: 100%;
  background-color: rgb(228 228 228);
`;

const MainContent = styled.div`
  padding: 16px;

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

  height: calc(100vh - 48px);
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
