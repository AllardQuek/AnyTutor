import styled from "styled-components";

const Button = ({ text }) => {
  return (
    <ButtonStyled>
      <button className="btn-submit">{text}</button>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  .btn-submit {
    background-image: linear-gradient(
      90deg,
      #102397 0%,
      #187adf 51%,
      #00eaf8 100%
    );
    width: 140px;
    height: 45px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #fff;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin-top: 1.5rem;
  }

  .btn-submit:hover {
    /* background-color: var(--hover-color); */
    box-shadow: 0px 15px 20px var(--background-dark-grey);
    color: var(--hover-color);
    transform: translateY(-7px);
  }
`;

export default Button;
