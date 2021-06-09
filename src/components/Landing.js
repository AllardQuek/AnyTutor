import "../App.css";
import "./Landing.css";
import { Button } from "@material-ui/core";
import homeVid from "../videos/homeVid.mp4";

function Landing() {
  return (
    <div className="landing-container">
      <video src={homeVid} autoPlay loop muted />
      <h1>REINVENT EDUCATION</h1>
      <p>What are you waiting for?</p>
      <Button
        className="submit"
        variant="contained"
        color="primary"
        type="submit"
        href="/login"
      >
        Get Started
      </Button>
    </div>
  );
}

export default Landing;
