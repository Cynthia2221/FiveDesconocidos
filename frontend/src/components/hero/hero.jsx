import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { HeroRelative, HeroAbsolute, StarsContainer } from "./hero.styled";
import { HeroAnimation } from "./hero.animation";

export const Hero = ({ onComplete }) => {
  const comp = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const hasPlayed = sessionStorage.getItem("heroAnimationPlayed") === "true";

  const stars = Array.from({ length: 50 }).map((_, i) => {
    const size = Math.random() * 2 + 1; // Random size between 1px and 3px
    const animationDuration = Math.random() * 3 + 2; // Random duration between 2s and 5s
    const animationDelay = Math.random() * 2; // Random delay between 0s and 2s

    return (
      <div
        key={i}
        className="star"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`, // Random opacity
          borderRadius: "50%",
          position: "absolute",
          boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`, // Add glow effect
          animation: `twinkle ${animationDuration}s infinite ease-in-out`,
          animationDelay: `${animationDelay}s`,
        }}
      />
    );
  });

  useLayoutEffect(() => {
    let ctx;

    if (!hasPlayed) {
      ctx = gsap.context(() => {
        const animation = HeroAnimation(() => {
          sessionStorage.setItem("heroAnimationPlayed", "true");
          setIsVisible(false);
          onComplete?.();
        });
      }, comp.current);
    } else {
      setIsVisible(false);
      onComplete?.();
    }

    return () => ctx?.revert();
  }, [hasPlayed, onComplete]);

  if (!isVisible) return null;

  return (
    <HeroRelative ref={comp} id="hero">
      <StarsContainer>{stars}</StarsContainer>
      <HeroAbsolute id="intro-slider">
        <h1 id="title-1">Education</h1>
        <h1 id="title-2">Care</h1>
        <h1 id="title-3">Free</h1>
      </HeroAbsolute>
    </HeroRelative>
  );
};
