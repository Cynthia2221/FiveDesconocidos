import { FooterStyled } from "./footer.styled";
import { useLocation, useNavigate } from "react-router-dom";

import leftArrow from "../../assets/svg/arrowLeft.svg";
import logo from "../../assets/logo.png";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleBackClick = () => {
    if (pathname === "/home") {
    } else {
      // goes back to the previous page in the history stack
      navigate(-1);
    }
  };

  return (
    <FooterStyled>
      <img src={leftArrow} alt="arrow" onClick={handleBackClick} />

      <div>
        <p>© 2025 Educare. </p>
        <p>All rights reserved.</p>
      </div>
      <img src={logo} alt="logo" />
    </FooterStyled>
  );
};
