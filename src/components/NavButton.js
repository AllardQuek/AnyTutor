import styled from "styled-components";

const NavButton = ({ text, className, onClick, href }) => {
  const classes = "btn " + className;

  return (
    <ButtonStyled>
      <a href={href}>
        <button type="submit" className={classes} onClick={onClick}>
          {text}
        </button>
      </a>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  .btn {
    background-color: var(--primary-color);
    text-transform: uppercase;
    font-weight: 500;
    color: var(--font-nav-color-2);
    border: 1px solid;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin-top: 1.5rem;
    margin-left: 0.5rem;
    letter-spacing: 1px;
  }

  .btn:hover {
    box-shadow: 0px 4px 6px var(--background-dark-grey);
  }
`;

export default NavButton;
