import React from "react";
import {
  AboutWrapper,
  Heading,
  Subheading,
  Paragraph
} from "../aboutus/aboutUs.style";

export const AboutUs = () => {
  return (
    <AboutWrapper>
      <Heading>About Us</Heading>
      <Subheading>Empowering learners everywhere</Subheading>
      <Paragraph>
        We believe quality education should be accessible to everyone. That’s why we created this platform — a place where anyone can learn new skills, deepen their knowledge, and unlock their potential at their own pace.
      </Paragraph>
      <Paragraph>
        From math and science to music and coding, our mission is to make learning simple, engaging, and flexible. Whether you're a student, a professional, or just curious — you're welcome here.
      </Paragraph>
      <Paragraph>
        Join thousands of learners and start your journey today.
      </Paragraph>
      {/*<TeamPhoto src="/assets/logo.png" alt="Our Team" />*/}
    </AboutWrapper>
  );
};
