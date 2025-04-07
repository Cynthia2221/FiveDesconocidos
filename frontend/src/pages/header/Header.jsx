import React from "react";
import styled from "styled-components";

import menuIcon from "../../assets/icons/menu-icon.svg";
import bellIcon from "../../assets/icons/bell-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import userPhoto from "../../assets/icons/user-photo.svg";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2B6985;
  padding: 10px 20px;
  height: 124px;
  display: flex;
  width: 100%;
  padding: 32px 11px 0px 13px;
  align-items: center;
  flex-shrink: 0;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  display: flex;
  height: 33px;
  padding: 0px 21px 0px 198px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  width: 70%;
  background-color: white;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
`;

const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  `;

const MenuIcon = styled.img`
  width: 18px;
  height: 10px;
  padding: 0px;
  margin: 0px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
`;

const BellIcon = styled.img`
  width: 16px;
  height: 18px;
  cursor: pointer;
  filter: hue-rotate(20deg) brightness(1.2);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
 `;

const ProfileImage = styled.img`
  border-radius: 60%;
  flex-shrink: 0;
  margin-left: 9px;
  margin-right: 0px;
  width: 60px;
  height: 60px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <MenuIcon src={menuIcon} alt="Menu" />
        <BellIcon src={bellIcon} alt="Notifications" />
        <SearchContainer>
          <SearchInput type="text" placeholder="" />
          <SearchIcon src={searchIcon} alt="Search" />
        </SearchContainer>
      </LeftSection>
      <ProfileImage src={userPhoto} alt="Profile" />
    </HeaderContainer>
  );
};

export default Header;