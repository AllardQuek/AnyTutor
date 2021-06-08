import { Button } from "@material-ui/core";

const Home = (user) => {
  console.log();
  return (
    <div>
      <h1>Hello World</h1>

      <Button
        className="submit"
        variant="contained"
        color="primary"
        type="submit"
        href="/login"
      >
        Login/Register
      </Button>
    </div>
  );
};

export default Home;
