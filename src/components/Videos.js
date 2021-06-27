import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  video: {
    marginTop: "1rem",
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
  const urls = [
    "https://youtu.be/EJP64UFpF-A",
    "https://youtu.be/KiT95Rp9Q4Y",
    "https://youtu.be/vnxwlkxF_bE",
  ];

  return (
    <>
      <h1 className={classes.header}>What We Do</h1>
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
