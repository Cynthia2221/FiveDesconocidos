import styled from "styled-components";

export const SettingsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
  a {
    text-decoration: none;
  }
`;

export const SettingsItem = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.color.cerulean};
  color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 1rem;
  border-radius: 8px;

  & > img {
    flex-shrink: 0;
  }

  & > p {
    flex-grow: 1;
    margin: 0;
  }
`;

export const SettingsItemToggle = styled(SettingsItem)`
  justify-content: space-between;
`;

export const SettingsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const SettingsPageTitle = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.color.cerulean};
  margin: 1rem 0;
`;
