import { FcIdea } from "react-icons/fc";
import styled from "styled-components";

const AboutInfo = () => {
  return (
    <AboutInfoStyled>
      <div className="about">
        <h1 className="title">Hi there.</h1>
        <h2>Want to make your lessons more engaging?</h2>
        <FcIdea className="idea" />
        <h3>
          AnyTutor is an automation tool for generating more engaging lesson
          videos for students by syncing lesson content to any image or video of
          a human face.
        </h3>
        <h3 className="">Here's what you'll need.</h3>
        <h3 className="example">
          1. A Source &#8594; A lesson video, audio, or text
        </h3>
        <h3 className="example">
          2. A Destination &#8594; Your tutor's face in image or video format
        </h3>
        <h4 className="note">
          NOTE: The examples shown are purely for demonstration purposes and are
          not intended to represent what the figures shown actually said nor
          their thoughts on the content presented. We remind users to respect
          others' privacy and will review any potentially malicious usage of our
          platform. Thank you!
        </h4>
      </div>
    </AboutInfoStyled>
  );
};

const AboutInfoStyled = styled.div`
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

  .example {
    padding-top: 1rem;
  }

  .note {
    color: var(--hover-color);
    border-left: 2px solid var(--font-light-color);
    border-right: 2px solid var(--font-light-color);
    padding: 1rem 1rem 1rem 1rem;
    margin-top: 1.5rem;
  }
`;

export default AboutInfo;
