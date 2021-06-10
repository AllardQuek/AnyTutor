import styled from "styled-components";
import "./Landing.css";
import Button from "./Button";

function Landing() {
  return (
    <LandingStyled>
      <div className="landing-container">
        <h1>REINVENT EDUCATION</h1>
        <p>What are you waiting for?</p>
        <div className="btn-started">
          <Button className="btn-started" text="Get Started" href="/login" />
        </div>
      </div>
    </LandingStyled>
  );
}

const LandingStyled = styled.div``;

export default Landing;
