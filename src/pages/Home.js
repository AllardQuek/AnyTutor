import Videos from "../components/Videos";
import Landing from "../components/Landing";
import styled from "styled-components";
import NavbarStyle from "../styles/NavbarStyle";

const Home = () => {
  return (
    <HomeStyled>
      <NavbarStyle />
      <Landing />
      <div className="vids">
        <Videos />
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  .vids {
    color: #fff;
  }
`;

export default Home;
