import {
  SidebarStyled,
  SidebarTitleContainer,
  SidebarLinksContainer,
  SidebarLink,
  SidebarLogout,
  SidebarLogoutLinkContainer,
} from "./sidebar.styled";

import home from "../../assets/svg/home.svg";
import settings from "../../assets/svg/settings.svg";
import calendar from "../../assets/svg/calendar.svg";
import subjetcs from "../../assets/svg/subjetcs.svg";
import logout from "../../assets/svg/logout.svg";

import arrow from "../../assets/svg/arrowLeft.svg";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

export const Sidebar = ({ collapsed, toggleSidebar }) => {
  const navigate = useNavigate();
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/");
  };

  return (
    <SidebarStyled $collapsed={collapsed}>
      <SidebarTitleContainer>
        <h1>
          <span>Edu</span>care
        </h1>
        <img src={arrow} alt="arrowLeft" onClick={toggleSidebar} />
      </SidebarTitleContainer>
      <SidebarLogoutLinkContainer>
        <SidebarLinksContainer>
          <SidebarLink>
            <Link to="/home" onClick={toggleSidebar}>
              <img src={home} alt="home icon" />
              <p>Home</p>
            </Link>
          </SidebarLink>
          <SidebarLink>
            <Link to="/calendar" onClick={toggleSidebar}>
              <img src={calendar} alt="calendar icon" />
              <p>Calendar</p>
            </Link>
          </SidebarLink>
          <SidebarLink>
            <Link to="/subject" onClick={toggleSidebar}>
              <img src={subjetcs} alt="subjetcs icon" />
              <p>Subjects & Links</p>
            </Link>
          </SidebarLink>
          <SidebarLink>
            <Link to="/settings" onClick={toggleSidebar}>
              <img src={settings} alt="settings icon" />
              <p>Settings</p>
            </Link>
          </SidebarLink>
        </SidebarLinksContainer>
        <SidebarLogout>
          <button onClick={handleLogout}>
            <img src={logout} alt="logout icon" />
            <p>Logout</p>
          </button>
        </SidebarLogout>
      </SidebarLogoutLinkContainer>
    </SidebarStyled>
  );
};
