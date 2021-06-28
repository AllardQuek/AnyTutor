import { Route, Redirect } from "react-router-dom";
import firebase from "firebase/app";

const PublicRoute = ({
  component: Component,
  restricted,
  handleLogout,
  home,
  ...rest
}) => {
  // console.log("PUBLIC");
  return (
    <Route
      {...rest}
      render={(props) => {
        return firebase.auth().currentUser && (restricted || home) ? (
          <Redirect to="/about" />
        ) : (
          <Component {...props} {...rest} />
        );
      }}
    />
  );
};

export default PublicRoute;
