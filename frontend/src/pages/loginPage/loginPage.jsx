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

export const LoginPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleUserChange = (e) => {
    const enteredUser = e.target.value;
    const userRegex = /^[0-9A-Za-z]{6,16}$/;
    setUser(enteredUser);
    setValidUser(userRegex.test(enteredUser));
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
    setValidPassword(enteredPassword.length >= 6);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validUser && validPassword) {
      console.log("Form submitted successfully!");
      console.log({ user, password });
      navigate("/home");
    } else {
      console.log("Form submission failed. Please fix the errors.");
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
            style={{
              border:
                user === ""
                  ? "2px solid #2B6985"
                  : validUser
                  ? "2px solid #2B6985"
                  : "2px solid red",
            }}
            id="user"
            value={user}
            onChange={handleUserChange}
            type="text"
          />
          {user && !validUser && (
            <span style={{ color: "red", fontSize: "small" }}>
              Please enter a valid user (6-16 alphanumeric characters)
            </span>
          )}
        </LoginInputContainer>
        <LoginInputContainer>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            style={{
              border:
                password === ""
                  ? "2px solid #2B6985"
                  : validPassword
                  ? "2px solid #2B6985"
                  : "2px solid red",
            }}
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />
          {password && !validPassword && (
            <span style={{ color: "red", fontSize: "small" }}>
              Password must be at least 6 characters long
            </span>
          )}
        </LoginInputContainer>
        <button
          disabled={!validUser || !validPassword}
          style={{
            opacity: !validUser || !validPassword ? 0.3 : 1,
            cursor: !validUser,
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
