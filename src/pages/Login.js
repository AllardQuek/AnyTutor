import { useState } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import CustomButton from "../components/CustomButton";
import DisabledButton from "../components/DisabledButton";
import LoginToggle from "../components/LoginToggle";
import { useAuth } from "../contexts/AuthContext";
import BackgroundStyle from "../styles/BackgroundStyle";

const Login = (props) => {
  const { login, signup } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [loading, setLoading] = useState(false);

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = async (e) => {
    clearErrors();
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      history.push("/about");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.message);
          break;
        default:
          setPasswordError(error.message); // Too many login attempt
          break;
      }
    }
    setLoading(false);
  };

  const handleSignup = async (e) => {
    clearErrors();
    e.preventDefault();
    setLoading(true);
    try {
      await signup(email, password);
      history.push("/about");
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
        default:
          break;
      }
      setLoading(false);
    }
  };

  const toggleLogin = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <LoginStyled>
      <BackgroundStyle />
      <form
        className="login"
        onSubmit={hasAccount ? handleLogin : handleSignup}
      >
        <Grid
          className="grid"
          container
          spacing={1}
          alignItems={hasAccount && !emailError ? "flex-end" : "center"}
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
              error={emailError}
            />
          </Grid>
        </Grid>

        <Grid
          className="grid"
          container
          spacing={1}
          alignItems={passwordError ? "center" : "flex-end"}
        >
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
              error={passwordError}
            />
          </Grid>
        </Grid>

        {loading ? (
          <DisabledButton
            text={hasAccount ? "Login" : "Sign up"}
            className="btn-submit"
          />
        ) : (
          <CustomButton
            text={hasAccount ? "Login" : "Sign up"}
            className="btn-submit"
            type="submit"
          />
        )}

        <LoginToggle hasAccount={hasAccount} toggleLogin={toggleLogin} />
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
    width: 100%;
    display: inline-block;

    @media (max-width: 480px) {
      box-shadow: none;
    }
  }

  @media (min-width: 481px) {
    .text-field {
      min-width: 350px; // Extend text field line to the width of the container
    }
  }

  @media (max-width: 480px) {
    .text-field {
      min-width: 310px;
    }
  }

  .grid {
    flex-wrap: nowrap;
  }
`;

export default Login;
