import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "./isLoggedIn";

const PublicRoute = ({
  component: Component,
  restricted,
  handleLogout,
  home,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() && (restricted || home) ? (
          <Redirect to="/upload-video" />
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
};

export default PublicRoute;
