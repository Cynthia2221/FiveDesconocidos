import styled from "styled-components";

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 300px;
  }

  button {
    padding: 1rem 0;
    background-color: ${(props) => props.theme.color.cerulean};
    color: ${(props) => props.theme.color.white};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.2rem;
    &:hover {
      background-color: ${(props) => props.theme.color.blue};
    }

    &:disabled {
      background-color: ${(props) => props.theme.color.cerulean};
      cursor: not-allowed;
      :hover {
        background-color: ${(props) => props.theme.color.cerulean};
      }
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 158px;
    height: 178px;
  }
  margin: 0 0 1rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LogoDiv = styled.div`
  background-color: ${(props) => props.theme.color.cerulean};
  color: ${(props) => props.theme.color.white};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;

  margin: 0 0 2.5rem 0;
  font-size: 1.2rem;

  opacity: 0;
  transition: opacity 1s ease-in-out;
  animation: fadeIn 3s forwards;
  animation-delay: 0.5s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  span {
    color: ${(props) => props.theme.color.yellow};
  }
`;

export const LoginFooter = styled.div`
  margin: 0.5rem 0;
  font-size: small;
  span {
    margin: 0 0.2rem;
    color: ${(props) => props.theme.color.blue};
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: ${(props) => props.theme.color.cerulean};
  }
  input {
    border-radius: 8px;
    padding: 0.5rem;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;
