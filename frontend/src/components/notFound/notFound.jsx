import { NotFoundStyled } from "./notFound.styled";
import { useNavigate } from "react-router-dom";

import shield from "../../assets/icons/shield-icon-x.svg";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <NotFoundStyled>
      <div>
        <img src={shield} alt="" />
        <h1>404</h1>
      </div>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={handleBack}>Go Back</button>
    </NotFoundStyled>
  );
};
