import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.cerulean};
  color: ${(props) => props.theme.color.white};
  padding: 0.5rem 1.5rem;
  height: 90px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img:first-child {
    width: 24px;
    height: 24px;
    &:hover {
      cursor: pointer;
    }
  }

  img:last-child {
    width: 50px;
    height: 50px;
  }
`;
