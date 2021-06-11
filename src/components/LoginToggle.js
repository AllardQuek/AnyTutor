import styled from "styled-components";

const LoginToggle = ({ text, callToAction, toggleLogin }) => {
  return (
    <ToggleStyled>
      <p>
        {text}
        <span onClick={toggleLogin}> {callToAction} </span>
      </p>
    </ToggleStyled>
  );
};

const ToggleStyled = styled.div`
  margin-top: 1rem;

  span {
    font-weight: 600;
    text-decoration: underline;
  }
`;

export default LoginToggle;
