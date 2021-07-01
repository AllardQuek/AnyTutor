import { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import EmailIcon from "@material-ui/icons/Email";
import MuiAlert from "@material-ui/lab/Alert";
import styled from "styled-components";

import CustomButton from "../components/CustomButton";
import DisabledButton from "../components/DisabledButton";
import { useAuth } from "../contexts/AuthContext";
import BackgroundStyle from "../styles/BackgroundStyle";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetComplete, setResetComplete] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setResetComplete(false);
  };

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    setLoading(true);
    setResetComplete(false);
    try {
      await resetPassword(email);
      setResetComplete(true);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <LoginStyled>
      <BackgroundStyle />
      <form className="login" onSubmit={handleSubmit}>
        <div>
          <Grid
            container
            spacing={1}
            alignItems={error ? "center" : "flex-end"}
          >
            <Grid item>
              <EmailIcon />
            </Grid>
            <Grid item>
              <TextField
                className="text-field"
                label="Your account email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText={error}
                error={error}
              />
            </Grid>
          </Grid>
        </div>
        {loading ? (
          <DisabledButton text="Reset Password" className="btn-reset" />
        ) : (
          <CustomButton
            text="Reset Password"
            className="btn-reset"
            type="submit"
          />
        )}
      </form>

      {resetComplete ? (
        <Snackbar
          open={resetComplete}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            We've got your request! Please check your email for further
            instructions.
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
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
`;

export default ForgotPassword;
