import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Navbar from "./components/Navbar";
import homeVid from "./videos/homeVid.mp4";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
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
      <Router>
        <AuthProvider>
          <video src={homeVid} autoPlay loop muted />

          <Navbar />
          <Switch>
            <PublicRoute path="/" exact component={Home} />
            <PublicRoute path="/about" component={About} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute
              path="/upload-image"
              exact
              component={Upload}
              text="Upload an image of a face and your speech audio (.mp3) !"
              mediaType="image/*"
              lessonVid={false}
            />
            <PrivateRoute
              path="/upload-video"
              exact
              component={Upload}
              text="Upload a short video (.mp4) of someone's
            face and your speech audio (.mp3) !"
              mediaType="video/mp4"
              lessonVid={false}
            />
            <PrivateRoute
              path="/upload-lesson"
              exact
              component={Upload}
              text="Upload a short video (.mp4) of someone's
            face and your lesson video!"
              mediaType="video/mp4"
              lessonVid={true}
            />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
