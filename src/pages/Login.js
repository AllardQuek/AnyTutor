import BackgroundStyle from "../styles/BackgroundStyle";
import Button from "../components/Button";
// import { Button } from "@material-ui/core";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  const handleSubmit = (e) => {
    console.log("submitting");
    e.preventDefault();
    hasAccount ? handleLogin() : handleSignUp();
  };

  return (
    <>
      <BackgroundStyle />
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMessage">{emailError}</p>

        <label htmlFor="">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMessage">{passwordError}</p>

        {hasAccount ? (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setHasAccount(!hasAccount)}> Sign up </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setHasAccount(!hasAccount)}>Log in</span>
          </p>
        )}
        <Button
          text={hasAccount ? "Login" : "Sign up"}
          className="btn-submit"
        />
        {/* <Button
          className="submit"
          variant="contained"
          color="primary"
          type="submit"
        >
          {hasAccount ? <div>Login</div> : <div>Sign Up </div>}
        </Button> */}
      </form>
    </>
  );
};

export default Login;
