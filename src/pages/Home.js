import styled from "styled-components";

import Landing from "../components/Landing";
import Videos from "../components/Videos";
import NavbarStyle from "../styles/NavbarStyle";

const Home = () => {
  return (
    <HomeStyled>
      <NavbarStyle />
      <Landing />
      <div className="vids">
        <Videos />
        <h1>hello</h1>
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.div``;

export default Home;
