import { BellIcon, HeaderContainer, LeftSection, MenuIcon, ProfileImage, SearchContainer, SearchIcon, SearchInput, ProfileButton } from "./headerProfile.styled";
import menuIcon from "../../assets/icons/menu-icon.svg"
import bellIcon from "../../assets/icons/bell-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import profilePhoto from '../../assets/icons/user-photo-big.png';
import { ProfileInfoContainer, ProfileName, ProfileEmail } from "./headerProfile.styled";
import React from "react";
export const HeaderProfile = ({ toggleSidebar }) => {

  return (
    <>
      <HeaderContainer>
        <LeftSection>
          <MenuIcon src={menuIcon} alt="Menu" onClick={toggleSidebar} />
          <BellIcon src={bellIcon} alt="Notifications" />
          <SearchContainer>
            <SearchInput type="text" placeholder="Search" />
            <SearchIcon src={searchIcon} alt="Search" />
          </SearchContainer>
        </LeftSection>
  
        <ProfileImage src={profilePhoto} alt="User profile" />
  
        <ProfileInfoContainer>
          <ProfileName>Mary</ProfileName>
          <ProfileEmail>mary123@gmail.com</ProfileEmail>
          <ProfileButton>Profile</ProfileButton>
        </ProfileInfoContainer>
      </HeaderContainer>
    </>
  );
}