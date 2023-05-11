import React from 'react';
import {FiSearch, FiUser} from 'react-icons/fi';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  padding: 10px 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 5px;
  margin-right: 4px;
  border: 1px solid #ced4da;
  border-radius: 4px;
`;

const UserButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const VerticallyAligned = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  } 
`;

export const TopNav = () => {
  return (
    <Nav>
      <VerticallyAligned>
        <SearchInput placeholder="Search" />
        <FiSearch size={20}></FiSearch>
      </VerticallyAligned>
      <UserButton>
        <FiUser size={20} />
      </UserButton>
    </Nav>
  );
};
