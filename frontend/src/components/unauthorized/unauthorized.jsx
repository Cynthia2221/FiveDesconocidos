import { UnauthorizedStyled } from "./unauthorized.styled";
import { useNavigate } from "react-router-dom";

import shield from "../../assets/icons/shield-icon.svg";

export const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoLogin = () => {
    navigate("/");
  };

  return (
    <UnauthorizedStyled>
      <div>
        <img src={shield} alt="Unauthorized Access" />
        <h1>401</h1>
        <h2>Unauthorized</h2>
      </div>
      <p>
        You do not have permission to access this page. Please log in with the appropriate
        credentials to continue.
      </p>
      <button onClick={handleGoLogin}>Go to Login</button>
    </UnauthorizedStyled>
  );
};
