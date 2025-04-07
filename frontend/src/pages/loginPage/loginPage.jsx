import {
  LoginPageContainer,
  LogoDiv,
  LoginFooter,
  ImageContainer,
  LoginInputContainer,
} from "./loginPage.styled";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/login.service";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Resetear mensaje de error antes del intento

    try {
      const result = await loginUser(user, password);
      console.log("Login exitoso:", result);

      localStorage.setItem("token", result.token);
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <LoginPageContainer>
      <LogoDiv>
        <span>EDU</span>CARE
      </LogoDiv>
      <ImageContainer>
        <img src={logo} alt="Logo" />
      </ImageContainer>
      <form onSubmit={handleSubmit}>
        <LoginInputContainer>
          <label htmlFor="user">User</label>
          <input
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            style={{
              border: "2px solid #2B6985",
            }}
          />
        </LoginInputContainer>
        <LoginInputContainer>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            style={{
              border: "2px solid #2B6985",
            }}
          />
        </LoginInputContainer>

        {errorMessage && (
          <div style={{ color: "red", fontSize: "small", marginTop: "8px" }}>
            {errorMessage}
          </div>
        )}

        <button
          disabled={!user || !password}
          style={{
            opacity: !user || !password ? 0.3 : 1,
            cursor: !user || !password ? "not-allowed" : "pointer",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
      <LoginFooter>
        <p>
          <span>
            <Link to="/register">Create new account</Link>
          </span>
        </p>
      </LoginFooter>
    </LoginPageContainer>
  );
};
