import Videos from "../components/Videos";
import Landing from "../components/Landing";
import styled from "styled-components";
import NavbarStyle from "../styles/NavbarStyle";

const Home = () => {
  return (
    <HomeStyled>
      <NavbarStyle />
      <Landing />
      <Videos />
    </HomeStyled>
  );
};

const HomeStyled = styled.div``;

export default Home;
