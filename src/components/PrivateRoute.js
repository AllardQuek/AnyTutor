import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
