import { BellIcon, HeaderContainer, LeftSection, MenuIcon, ProfileImage, SearchContainer, SearchIcon, SearchInput } from "./header.styled";
import menuIcon from "../../assets/icons/menu-icon.svg";
import bellIcon from "../../assets/icons/bell-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import userPhoto from "../../assets/icons/user-photo.svg";

export const Header = ({ toggleSidebar }) => {
  return (
    <HeaderContainer>
      <LeftSection>
        <MenuIcon src={menuIcon} alt="Menu" onClick={toggleSidebar} />
        <BellIcon src={bellIcon} alt="Notifications" />
        <SearchContainer>
          <SearchInput type="text" placeholder="Search" />
          <SearchIcon src={searchIcon} alt="Search" />
        </SearchContainer>
      </LeftSection>
      <ProfileImage src={userPhoto} alt="Profile" />
    </HeaderContainer>
  );
};