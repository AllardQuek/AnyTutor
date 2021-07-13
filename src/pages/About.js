import styled from "styled-components";

import AboutInfo from "../components/AboutInfo";
import Videos from "../components/Videos";
import BackgroundStyle from "../styles/BackgroundStyle";

const About = () => {
  return (
    <AboutStyled>
      <BackgroundStyle />
      <AboutInfo />
      <Videos />
    </AboutStyled>
  );
};

const AboutStyled = styled.main``;

export default About;
