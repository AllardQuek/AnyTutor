import styled from "styled-components";

import Videos from "../components/Videos";
import BackgroundStyle from "../styles/BackgroundStyle";
import AboutInfo from "./AboutInfo";

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
