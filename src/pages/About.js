import BackgroundStyle from "../styles/BackgroundStyle";
import { FcIdea } from "react-icons/fc";
import styled from "styled-components";
import Videos from "../components/Videos";

const About = () => {
  return (
    <AboutStyled>
      <BackgroundStyle />
      <div className="about">
        <h1 className="title">Hi there.</h1>
        <h2>Want to make your lessons more engaging?</h2>
        <FcIdea className="idea" />
        <h3>
          AnyTutor is an automation tool for generating more engaging lesson
          videos for students by mapping and syncing a human face onto any
          video.
        </h3>
        <h3 className="cta">Here's what we do.</h3>

        <h3 className="example">1. Image + Audio &#8594; AI Video</h3>
        <h3 className="example">2. Video + Audio &#8594; AI Video</h3>
        <h3 className="example">3. Lesson Video + Video &#8594; AI Video</h3>
        <h4 className="note">
          NOTE: The examples shown are purely for demonstration purposes and are
          not intended to represent what the figures shown actually said nor
          their thoughts on the content presented. We remind users to respect
          others' privacy and will review any potentially malicious usage of our
          platform.
        </h4>
      </div>

      <Videos />
    </AboutStyled>
  );
};

const AboutStyled = styled.main`
  .about {
    text-align: center;
    width: 50%;
    display: inline-block; // Important for alignment!
  }

  .title {
    padding-top: 3rem;
    padding-bottom: 1rem;
  }

  .idea {
    font-size: 3rem; // Can use this instead of width and height
  }

  .cta {
    padding: 0.5rem 0;
  }

  .example {
    padding-top: 1rem;
  }

  .note {
    color: var(--hover-color);
    border-left: 2px solid var(--font-light-color);
    border-right: 2px solid var(--font-light-color);
    padding: 2rem 1rem 1rem 1rem;
  }
`;

export default About;
