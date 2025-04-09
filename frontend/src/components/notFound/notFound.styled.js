import styled from "styled-components";

export const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px - 77px);
  background-color: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
  text-align: center;
  padding: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 100px;
    height: 100px;
    animation: neonGlow 1.5s infinite alternate ease-in-out;
    filter: drop-shadow(0 0 5px ${(props) => props.theme.color.red});
  }

  @keyframes neonGlow {
    0% {
      transform: scale(1);
      filter: drop-shadow(0 0 5px ${(props) => props.theme.color.red})
        drop-shadow(0 0 7px ${(props) => props.theme.color.red})
        drop-shadow(0 0 15px ${(props) => props.theme.color.red});
    }
    50% {
      transform: scale(1.1);
      filter: drop-shadow(0 0 10px ${(props) => props.theme.color.red});
    }
    100% {
      transform: scale(1);
      filter: drop-shadow(0 0 5px ${(props) => props.theme.color.red})
        drop-shadow(0 0 7px ${(props) => props.theme.color.red})
        drop-shadow(0 0 7px ${(props) => props.theme.color.red});
    }
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  h2 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    margin: 1rem 0;
    max-width: 90%;
    line-height: 1.4;
  }

  button {
    margin-top: 1.5rem;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.color.blue};
    background-color: ${(props) => props.theme.color.white};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.color.cerulean};
      color: ${(props) => props.theme.color.white};
    }
  }
`;
