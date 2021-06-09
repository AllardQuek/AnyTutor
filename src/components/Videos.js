import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  video: {
    marginTop: "1rem",
    position: "relative",
    paddingBottom: "3rem",
    display: "flex",
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  header: {
    color: "#fff",
  },
}));

function Cards() {
  const classes = useStyles();
  const urls = [
    "https://youtu.be/KiT95Rp9Q4Y",
    "https://youtu.be/oeUUG7OH-SQ",
    "https://youtu.be/tHjFBbSCszU",
  ];

  return (
    <>
      <h1 className={classes.header}>Check out these sample videos!</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {urls.map((url, value) => (
              <Grid key={value} item>
                <div className={classes.video}>
                  <ReactPlayer
                    className="classes.player"
                    url={url}
                    width="100%"
                    height="100%"
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Cards;
