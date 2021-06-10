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
    color: "#fff",
    textTransform: "uppercase",
  },
}));

function Cards() {
  const classes = useStyles();
  const urls = [
    "https://youtu.be/KiT95Rp9Q4Y",
    "https://youtu.be/oeUUG7OH-SQ",
    "https://youtu.be/EJP64UFpF-A",
  ];

  return (
    <>
      <h1 className={classes.header}>Use Cases</h1>
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

export default Cards;
