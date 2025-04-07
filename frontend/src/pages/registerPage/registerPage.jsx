import {
  RegisterPageContainer,
  RegisterInputContainer,
  RegisterFooter,
} from "./registerPage.styled";
import { LogoDiv } from "./registerPage.styled";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/user.service"; 

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [age, setAge] = useState("");
  const [validAge, setValidAge] = useState(false);

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

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(enteredEmail);
    setValidEmail(emailRegex.test(enteredEmail));
  };

  const handleAgeChange = (e) => {
    const enteredAge = e.target.value;
    setAge(enteredAge);
    setValidAge(enteredAge > 0 && enteredAge <= 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validUser && validPassword && validEmail && validAge) {
      try {
        const userData = {
          name: user,
          email,
          password,
          age: Number(age),
        };
  
        await registerUser(userData);
        navigate("/home");
        console.log("Registro exitoso", userData)
      } catch (error) {
        alert("Error al registrarse: " + error.message);
      }
    } else {
      console.log("Form submission failed. Please fix the errors.");
    }
  };

  return (
    <RegisterPageContainer>
      <LogoDiv>
        <span>EDU</span>CARE
      </LogoDiv>
      <form onSubmit={handleSubmit}>
        <RegisterInputContainer>
          <label htmlFor="user">User</label>
          <input
            id="user"
            type="text"
            value={user}
            onChange={handleUserChange}
            style={{
              border:
                user === ""
                  ? "2px solid #2B6985"
                  : validUser
                  ? "2px solid #2B6985"
                  : "2px solid red",
            }}
          />
          {user && !validUser && (
            <span style={{ color: "red", fontSize: "small" }}>
              Please enter a valid user (6-16 alphanumeric characters)
            </span>
          )}
        </RegisterInputContainer>
        <RegisterInputContainer>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{
              border:
                email === ""
                  ? "2px solid #2B6985"
                  : validEmail
                  ? "2px solid #2B6985"
                  : "2px solid red",
            }}
          />
          {email && !validEmail && (
            <span style={{ color: "red", fontSize: "small" }}>
              Please enter a valid email address
            </span>
          )}
        </RegisterInputContainer>
        <RegisterInputContainer>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={handleAgeChange}
            style={{
              border:
                age === "" ? "2px solid #2B6985" : validAge ? "2px solid #2B6985" : "2px solid red",
            }}
          />
          {age && !validAge && (
            <span style={{ color: "red", fontSize: "small" }}>
              You must be between 1 and 100 years old
            </span>
          )}
        </RegisterInputContainer>
        <RegisterInputContainer>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              border:
                password === ""
                  ? "2px solid #2B6985"
                  : validPassword
                  ? "2px solid #2B6985"
                  : "2px solid red",
            }}
          />
          {password && !validPassword && (
            <span style={{ color: "red", fontSize: "small" }}>
              Password must be at least 6 characters long
            </span>
          )}
        </RegisterInputContainer>

        <button
          disabled={!validUser || !validPassword || !validEmail}
          style={{
            opacity: !validUser || !validPassword || !validEmail ? 0.3 : 1,
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
      <RegisterFooter>
        <p>
          <span>
            <Link to="/">Already have an account</Link>
          </span>
        </p>
      </RegisterFooter>
    </RegisterPageContainer>
  );
};
