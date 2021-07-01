import styled from "styled-components";

const DisabledButton = ({ text, className, onClick, href }) => {
  const classes = "btn " + className;

  return (
    <ButtonStyled>
      <a href={href}>
        <button type="submit" className={classes} onClick={onClick} disabled>
          {text}
        </button>
      </a>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  .btn {
    border: none;
    color: gray;
    background-color: #cccccc;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin-top: 1.5rem;
  }

  .btn-submit {
    width: 140px;
    height: 45px;
    font-size: 11px;
    letter-spacing: 2.5px;
  }

  .btn-reset {
    width: 200px;
    height: 45px;
    font-size: 12px;
    letter-spacing: 2.5px;
  }
`;

export default DisabledButton;
