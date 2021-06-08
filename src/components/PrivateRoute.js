import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "./isLoggedIn";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in, else redirect the user to /login page
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
