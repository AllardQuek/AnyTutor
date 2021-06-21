import { Route, Redirect } from "react-router-dom";
import firebase from "firebase/app";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  console.log("PRIVATE");

  // Show the component only when the user is logged in, else redirect the user to /login page
  return (
    <Route
      {...rest}
      render={(props) => {
        return firebase.auth().currentUser ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
