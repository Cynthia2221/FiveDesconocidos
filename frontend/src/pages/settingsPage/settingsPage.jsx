import { Container } from "../../components/container/container";
import { useState } from "react";

import {
  SettingsList,
  SettingsItem,
  SettingsPageContainer,
  SettingsPageTitle,
  SettingsItemToggle,
} from "./settingsPage.styled";

import { ToggleSwitch } from "../../components/toggleSwitch/toggleSwitch";

import bell from "../../assets/icons/bell-icon.svg";
import sun from "../../assets/icons/sun-icon.svg";
import user from "../../assets/icons/user-icon.svg";
import global from "../../assets/icons/global-icon.svg";
import about from "../../assets/icons/about-icon.svg";
import help from "../../assets/icons/help-icon.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
export const SettingsPage = () => {
  const { loginData } = useAuth();

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  console.log(loginData.user.id);

  return (
    <Container>
      <SettingsPageContainer>
        <SettingsPageTitle>Settings</SettingsPageTitle>
        <SettingsList>
          <SettingsItemToggle>
            <img src={bell} alt="bell icon" />
            <p>Notifications</p>
            <ToggleSwitch />
          </SettingsItemToggle>

          <SettingsItemToggle>
            <img src={sun} alt="sun icon" />
            <p>Light/Dark mode</p>
            <ToggleSwitch />
          </SettingsItemToggle>

          <Link to={`/profile/${loginData.user.id}`}>
            <SettingsItem>
              <img src={user} alt="user icon" />
              <p>Account & Profile</p>
            </SettingsItem>
          </Link>

          <Link to="/Language">
            <SettingsItem>
              <img src={global} alt="global icon" />
              <p>Language & Region</p>
            </SettingsItem>
          </Link>

          <Link to="/aboutUs">
            <SettingsItem>
              <img src={about} alt="about icon" />
              <p>About us</p>
            </SettingsItem>
          </Link>

          <Link to="/help">
            <SettingsItem>
              <img src={help} alt="help icon" />
              <p>Help & Support</p>
            </SettingsItem>
          </Link>
        </SettingsList>
      </SettingsPageContainer>
    </Container>
  );
};
