import styled from "styled-components";

export const ToggleSwitchStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  cursor: pointer;
`;

export const ToggleSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleSwitchSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e5e7eb;
  border-radius: 24px;
  transition: 0.4s all ease-in-out;

  &::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

export const ToggleSwitchCheckedSlider = styled(ToggleSwitchSlider)`
  background-color: ${(props) => props.theme.color.yellow};

  &::before {
    transform: translateX(26px);
  }
`;
