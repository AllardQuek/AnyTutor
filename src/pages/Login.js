import BackgroundStyle from "../styles/BackgroundStyle";
import Button from "../components/Button";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import LoginToggle from "../components/LoginToggle";

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

  const toggleLogin = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <LoginStyled>
      <BackgroundStyle />
      <form className="login" onSubmit={handleSubmit}>
        <div>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <PersonIcon />
            </Grid>
            <Grid item>
              <TextField
                className="text-field"
                label="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText={emailError}
              />
            </Grid>
          </Grid>
        </div>

        <div>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LockIcon />
            </Grid>
            <Grid item>
              <TextField
                className="text-field"
                value={password}
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                helperText={passwordError}
              />
            </Grid>
          </Grid>
        </div>

        <LoginToggle
          text={
            hasAccount ? "Don't have an account? " : "Already have an account?"
          }
          callToAction={hasAccount ? "Sign up" : "Log in"}
          toggleLogin={toggleLogin}
        ></LoginToggle>

        {/* {hasAccount ? (
          <p>
            Don't have an account?
            <span onClick={() => setHasAccount(!hasAccount)}> Sign up </span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setHasAccount(!hasAccount)}> Log in</span>
          </p>
        )} */}
        <Button
          text={hasAccount ? "Login" : "Sign up"}
          className="btn-submit"
          onClick={handleSubmit}
        />
      </form>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  .login {
    padding: 2rem;
    border: 2px;
    border-radius: 20px;
    box-shadow: 3px 3px 4px 4px #ccc;
  }

  .text-field {
    min-width: 300px;
  }

  .wrap-input {
    width: 100%;
    border-bottom: 2px solid #d9d9d9;
    margin-bottom: 23px;
    display: flex;
    flex-direction: column;
  }

  .errorMessage {
    color: var(--error-color);
  }

  .labels {
    color: red;
    text-align: left;
    font-size: 14px;
    padding-left: 7px;
  }

  .MuiFormHelperText-root {
    color: red;
  }
`;

export default Login;
