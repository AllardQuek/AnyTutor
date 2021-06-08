import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, user, ...rest }) => {
  const loggedIn = user ? true : false;

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        loggedIn && restricted ? (
          <Redirect to="/upload" />
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
};

export default PublicRoute;
