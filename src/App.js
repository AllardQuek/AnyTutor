import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import fire from "./components/fire";
import Login from "./pages/Login";
import Uploader from "./pages/Upload";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Navbar from "./components/Navbar";
import homeVid from "./videos/homeVid.mp4";

function App() {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    console.log("LOFFING ING");
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            console.log("ER");
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            console.log("EROR");

            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          // setUser(user);
          setUser(true);
        } else {
          setUser(false);
        }
      });
    };
    authListener();
  }, []);

  return (
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
      <video src={homeVid} autoPlay loop muted />
      <Router>
        <Navbar user={user} handleLogout={handleLogout} />

        <Switch>
          <PublicRoute
            path="/"
            exact
            restricted={false}
            home={true}
            component={Home}
            handleLogout={handleLogout}
          />
          <PublicRoute
            path="/about"
            exact
            restricted={false}
            component={About}
          />
          <PublicRoute
            path="/login"
            exact
            restricted={true}
            component={Login}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
          <PrivateRoute
            component={Uploader}
            text="Upload your speech audio (.mp3) and a short video (.mp4) of someone's
            face!"
            mediaType="audio/*"
            path="/upload-video"
            exact
          />
          <PrivateRoute
            component={Uploader}
            text="Upload an image of a face!"
            mediaType="image/*"
            path="/upload-image"
            exact
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
