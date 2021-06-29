import BackgroundStyle from "../styles/BackgroundStyle";
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import LoginToggle from "../components/LoginToggle";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = (props) => {
  const { login, signup } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  // const [loading, setLoading] = useState(true);

  // const clearInputs = () => {
  //   setEmail("");
  //   setPassword("");
  // };

  // const clearErrors = () => {
  //   setEmailError("");
  //   setPasswordError("");
  // };

  // TODO improve on catching errors
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    if (hasAccount) {
      try {
        await login(email, password);
        history.push("/about");
      } catch {
        console.log("Failed to log in");
      }
      login();
    } else {
      try {
        await signup(email, password);
        history.push("/about");
      } catch {
        console.log("Failed to create an account");
      }
    }
    // setLoading(false);
  };

  const toggleLogin = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <LoginStyled>
      <BackgroundStyle />
      <form className="login" onSubmit={handleSubmit}>
        <div>
          <Grid
            container
            spacing={1}
            alignItems={hasAccount ? "flex-end" : "center"}
          >
            <Grid item>
              <EmailIcon />
            </Grid>
            <Grid item>
              <TextField
                className="text-field"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText={
                  !hasAccount && !emailError
                    ? "Please use a legit email as results will be sent to it!"
                    : emailError
                }
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

        <CustomButton
          text={hasAccount ? "Login" : "Sign up"}
          className="btn-submit"
          type="submit"
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
