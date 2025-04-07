import styled from "styled-components";

export const SidebarStyled = styled.aside`
  position: absolute;
  background-color: ${(props) => props.theme.color.cerulean};
  width: 300px;
  height: calc(100vh - 90px - 37px);
  font-family: inter;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: ${({ $collapsed }) => ($collapsed ? "-300px" : "0")};
  transition: left 0.7s ease;
  img {
    cursor: pointer;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
`;

export const SidebarTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  h1 {
    text-transform: uppercase;
    color: ${(props) => props.theme.color.white};
    span {
      color: ${(props) => props.theme.color.yellow};
    }
  }
`;

export const SidebarLinksContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SidebarLink = styled.div`
  a {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme.color.white};
    border-radius: 8px;
    text-decoration: none;
    color: ${(props) => props.theme.color.white};
    transition: all 0.3s ease;

    img {
      width: 24px;
      height: 24px;
    }

    p {
      transition: opacity 0.3s ease;
    }
  }
`;

export const SidebarLogout = styled.div`
  margin-top: auto;
  button {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme.color.white};
    border-radius: 8px;
    width: 100%;
    background-color: transparent;
    color: ${(props) => props.theme.color.white};
    cursor: pointer;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s ease;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const SidebarLogoutLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
