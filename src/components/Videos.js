import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

import { useAuth } from "../contexts/AuthContext";
import CustomButton from "./CustomButton";

const useStyles = makeStyles(() => ({
  video: {
    marginTop: "3rem",
    position: "relative",
    paddingBottom: "3rem",
  },
  header: {
    marginTop: "3rem",
    textTransform: "uppercase",
  },
}));

function Videos() {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const urls = [
    "https://youtu.be/rJ6SW2KPI4U",
    "https://youtu.be/mhn5xSXgBhc",
    "https://youtu.be/vnxwlkxF_bE",
  ];

  return (
    <>
      <h1 className={classes.header}>What We Do</h1>
      {/* If user is logged in display custom button else do not display anything */}
      {currentUser && (
        <CustomButton text="Try Now" className="btn-submit" href="upload" />
      )}
      <Grid container direction="row" justify="center" spacing={2}>
        {urls.map((url, value) => (
          <Grid key={value} item>
            <div className={classes.video}>
              <ReactPlayer url={url} pip={true} controls={true} width="100%" />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Videos;
