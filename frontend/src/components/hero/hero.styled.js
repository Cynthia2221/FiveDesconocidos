import styled from "styled-components";

export const HeroRelative = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0e24 0%, #1a2980 100%);
`;

export const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  .star {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    animation: twinkle 2s infinite alternate;
  }

  @keyframes twinkle {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const HeroAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  background: linear-gradient(135deg, rgba(26, 41, 128) 0%, rgba(38, 208, 206) 100%);
  text-align: center;

  h1 {
    color: white;
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin: 0;
    font-family: "Archivo Black", sans-serif;
    letter-spacing: 0.15em;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1rem;
  }
`;
