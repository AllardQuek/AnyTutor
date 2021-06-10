import styled from "styled-components";
import { Button } from "@material-ui/core";

const ButtonStyled = styled(Button)`
  background-image: linear-gradient(
    to right,
    #7474bf 0%,
    #348ac7 51%,
    #7474bf 100%
  );

  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export default ButtonStyled;
