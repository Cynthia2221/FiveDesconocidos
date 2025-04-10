import { BellIcon, HeaderContainer, LeftSection, MenuIcon, ProfileImage, SearchContainer, SearchIcon, SearchInput } from "./header.styled";
import menuIcon from "../../assets/icons/menu-icon.svg";
import bellIcon from "../../assets/icons/bell-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import userPhoto from "../../assets/icons/user-photo-small.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export const Header = ({ toggleSidebar }) => {

  const location = useLocation();
  const pathname = location.pathname;

  const isAuthPage = pathname === "/profile";

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
      {!isAuthPage ? <Link to="Profile"><ProfileImage src={userPhoto} alt="Profile" /></Link> : null}
    </HeaderContainer>
  );
};