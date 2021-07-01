import styled from "styled-components";

import "./Landing.css";
import { useAuth } from "../contexts/AuthContext";
import CustomButton from "./CustomButton";

function Landing() {
  const { currentUser } = useAuth();

  return (
    <LandingStyled>
      <div className="landing-container">
        <h1>REINVENT EDUCATION</h1>
        <p>What are you waiting for?</p>
        <div className="btn-started">
          <CustomButton
            className="btn-started"
            text={currentUser ? "Start Now" : "Get Started"}
            href={currentUser ? "/about" : "/login"}
          />
        </div>
      </div>
    </LandingStyled>
  );
}

const LandingStyled = styled.div``;

export default Landing;
