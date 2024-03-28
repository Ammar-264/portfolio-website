import React from "react";
import * as aboutStyle from "./about.style";
import AboutSVG from "./svg/svg";
import { Slide } from "react-awesome-reveal";

function AboutSection() {
  const aboutMe =
    "I am a skilled front-end developer . Passionate about creating beautiful and functional websites, I am dedicated to staying up-to-date with the latest trends and best practices in front-end development, and I am constantly exploring new tools and techniques to improve my work";
  return (
    <aboutStyle.Container id="about">
      {/* about svg container */}
      <aboutStyle.SvgContainer>
        <Slide style={{width:'100%'}} direction="left">
          <AboutSVG />
        </Slide>
      </aboutStyle.SvgContainer>
      {/* about text */}

      <aboutStyle.TextContainer>
        <Slide style={{width:'100%'}} direction="right">
          <aboutStyle.Heading>About Me</aboutStyle.Heading>
          <aboutStyle.Text>{aboutMe}</aboutStyle.Text>
        </Slide>
      </aboutStyle.TextContainer>
    </aboutStyle.Container>
  );
}

export default AboutSection;
