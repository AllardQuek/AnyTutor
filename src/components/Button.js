import styled from "styled-components";

const Button = ({ text, href, className }) => {
  const classes = "btn " + className;

  return (
    <ButtonStyled>
      <a href={href}>
        <button className={classes}>{text}</button>
      </a>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  .btn {
    background-image: linear-gradient(
      90deg,
      #102397 0%,
      #187adf 51%,
      #00eaf8 100%
    );
    text-transform: uppercase;
    font-weight: 500;
    color: #fff;
    border: none;
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

  .btn:hover {
    /* background-color: var(--hover-color); */
    box-shadow: 0px 15px 20px var(--background-dark-grey);
    color: var(--hover-color);
    transform: translateY(-7px);
  }

  .btn-started {
    width: 220px;
    height: 75px;
    font-size: 18px;
    letter-spacing: 3.5px;
  }

  .btn-started:hover {
    box-shadow: 0px 15px 20px;
  }
`;

export default Button;