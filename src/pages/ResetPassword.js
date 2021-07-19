import { useState } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import EmailIcon from "@material-ui/icons/Email";
import styled from "styled-components";

import CustomButton from "../components/CustomButton";
import DisabledButton from "../components/DisabledButton";
import Snack from "../components/Snack";
import { useAuth } from "../contexts/AuthContext";
import BackgroundStyle from "../styles/BackgroundStyle";

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetComplete, setResetComplete] = useState(false);

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
          <CustomButton text="Reset Password" className="btn-reset" />
        )}
      </form>

      <Snack
        severity="success"
        text="We've got your request! Please check your email for further
            instructions."
        condition={resetComplete}
        setCondition={setResetComplete}
      />
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  .login {
    padding: 2rem;
    border: 2px;
    border-radius: 20px;
    box-shadow: 3px 3px 4px 4px var(--shadow-color);

    @media (max-width: 480px) {
      box-shadow: none;
    }
  }

  .text-field {
    min-width: 300px;
  }
`;

export default ResetPassword;
