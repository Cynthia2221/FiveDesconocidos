import { gsap } from "gsap";

export const HeroAnimation = (onComplete) => {
  const t1 = gsap.timeline({
    defaults: { ease: "power3.inOut", duration: 0.8 },
  });

  // Animate stars first
  t1.from(".star", {
    opacity: 0,
    duration: 2,
    stagger: {
      amount: 1.5,
      from: "random",
    },
    ease: "power1.out",
  })
    .to(
      ".star",
      {
        opacity: 0.2,
        y: -20,
        duration: 3,
        stagger: {
          amount: 2,
          from: "random",
        },
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      },
      "<"
    )

    // Original animations
    .from(
      "#intro-slider",
      {
        opacity: 0,
        scale: 1.1,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=1.5"
    );
  t1.to(
    ["#title-1", "#title-2", "#title-3"],
    {
      scale: 1.05,
      stagger: 0.1,
      duration: 0.5,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    },
    "+=0.2"
  )

    .from(
      "#title-1",
      {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.8"
    )
    .from(
      "#title-2",
      {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.6"
    )
    .from(
      "#title-3",
      {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.6"
    )
    .to(
      ["#title-1", "#title-2", "#title-3"],
      {
        opacity: 0,
        y: -40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.in",
      },
      "+=0.5"
    )
    .to("#intro-slider", {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.in",
    })
    .to(
      "#intro-slider",
      {
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete,
      },
      "+=0.5"
    );

  return t1;
};
