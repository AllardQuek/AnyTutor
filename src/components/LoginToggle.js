import styled from "styled-components";

const LoginToggle = ({ hasAccount, toggleLogin }) => {
  const text = hasAccount
    ? "Don't have an account? "
    : "Already have an account? ";
  const callToAction = hasAccount ? "Sign up" : "Log in";

  return (
    <ToggleStyled>
      {hasAccount ? <p className="link pw">Forgot password?</p> : <></>}
      <p>
        {text}
        <span className="link" onClick={toggleLogin}>
          {callToAction}
        </span>
      </p>
    </ToggleStyled>
  );
};

const ToggleStyled = styled.div`
  margin-top: 1rem;

  .link {
    font-weight: 500;
    text-decoration: underline;
  }

  .pw {
    margin-top: 1.2rem;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--background-dark-grey);
    letter-spacing: 0.02em;
  }
`;

export default LoginToggle;
