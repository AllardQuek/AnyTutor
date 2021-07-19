import { useEffect, useState } from "react";

import { ScatterBoxLoader } from "react-awesome-loaders";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Toggle from "./components/Toggle";
import { AuthProvider } from "./contexts/AuthContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Upload from "./pages/Upload";
import BackgroundStyle from "./styles/BackgroundStyle";
import darkHomeVid from "./videos/darkHomeVid.mp4";
import lightHomeVid from "./videos/lightHomeVid.mp4";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light-theme"); // Default dark theme

  useEffect(() => {
    const localTheme = window.localStorage.getItem("anytutor-theme"); // Save chosen theme in local storage
    localTheme ? setTheme(localTheme) : setMode("light-theme"); // Default to light mode if no theme
    document.documentElement.className = theme; // Apply chosen theme by setting class
  }, [theme]); // https://reactjs.org/docs/hooks-effect.html

  const themeToggler = () => {
    if (theme === "light-theme") {
      setMode("dark-theme");
    } else {
      setMode("light-theme");
    }
  };

  const setMode = (mode) => {
    window.localStorage.setItem("anytutor-theme", mode);
    setTheme(mode);
  };

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
          <BackgroundStyle />
          <ScatterBoxLoader
            primaryColor={theme === "light-theme" ? "#677897" : "#d58815"}
          />
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
          <Toggle themeToggler={themeToggler} />
          <Router>
            <AuthProvider>
              <video
                src={theme === "light-theme" ? lightHomeVid : darkHomeVid}
                autoPlay
                loop
                muted
              />
              <Navbar />

              <Switch>
                <PublicRoute path="/" exact component={Home} />
                <PublicRoute path="/about" component={About} />
                <PublicRoute path="/login" component={Login} isLogin={true} />
                <PrivateRoute path="/upload" component={Upload} />
                <PublicRoute path="/reset-password" component={ResetPassword} />
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

  // CSS for MUI text inputs in login, register and reset password pages
  label,
  label.Mui-focused,
  input,
  .MuiFormHelperText-root {
    color: var(--font-light-color);
  }

  .MuiInput-underline:before {
    border-color: var(--font-light-color);
  }

  .MuiInput-underline:after {
    border-color: var(--success-color);
  }
`;

export default App;
