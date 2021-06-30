import BackgroundStyle from "../styles/BackgroundStyle";
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = (props) => {
  const { resetPassword } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    // setLoading(true);
    try {
      await resetPassword(email, password);
      history.push("/about");
    } catch (error) {
      setError(error.message);
    }
    // setLoading(false);
  };

  return (
    <LoginStyled>
      <BackgroundStyle />
      <form className="login" onSubmit={handleSubmit}>
        <div>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <EmailIcon />
            </Grid>
            <Grid item>
              <TextField
                className="text-field"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText={error}
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
                helperText={error}
              />
            </Grid>
          </Grid>
        </div>

        <CustomButton
          text="Reset Password"
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

export default ForgotPassword;
