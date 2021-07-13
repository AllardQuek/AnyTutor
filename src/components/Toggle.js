import Brightness4Icon from "@material-ui/icons/Brightness4";
import styled from "styled-components";

const Toggle = ({ themeToggler }) => {
  return (
    <ToggleStyled onClick={themeToggler}>
      <Brightness4Icon />
    </ToggleStyled>
  );
};

const ToggleStyled = styled.button`
  cursor: pointer;
  border: none;
  position: fixed;
  right: 0;
  top: 20%;
  background-color: var(--theme-toggle-color);
  width: 4.5rem;
  height: 2.5rem;
  z-index: 15; // If box overlaps with other components, it will still show (higher z-index)
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.7rem;
    color: var(--white-color);
  }
`;

export default Toggle;
