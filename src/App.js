import { useEffect, useState } from "react";

import { ScatterBoxLoader } from "react-awesome-loaders";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { AuthProvider } from "./contexts/AuthContext";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import homeVid from "./videos/homeVideo.mp4";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This code will run after the component is mounted
    console.log("mounted");
    setTimeout(() => {
      setLoading(false); // Shows App after 2.5s
    }, 2500);
  }, []);

  return (
    <AppStyled>
      {loading ? (
        <div className="loader">
          <ScatterBoxLoader primaryColor={"#677897"} />
        </div>
      ) : (
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>AnyTutor</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
          </Helmet>
          <Router>
            <AuthProvider>
              <video src={homeVid} autoPlay loop muted />
              <Navbar />

              <Switch>
                <PublicRoute path="/" exact component={Home} />
                <PublicRoute path="/about" component={About} />
                <PublicRoute path="/login" component={Login} isLogin={true} />
                <PrivateRoute path="/upload" component={Upload} />
                <PublicRoute
                  path="/reset-password"
                  component={ForgotPassword}
                />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      )}
    </AppStyled>
  );
}

const AppStyled = styled.div`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; // Need this for vertical alignment
  }
`;

export default App;
