import Videos from "../components/Videos";
import Landing from "../components/Landing";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeStyled>
      <Landing />
      <Videos />
    </HomeStyled>
  );
};

const HomeStyled = styled.div``;

export default Home;
