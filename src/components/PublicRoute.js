import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "./isLoggedIn";
import Uploader from "./Uploader";

const PublicRoute = ({
  component: Component,
  restricted,
  handleLogout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() && restricted ? (
          <Redirect to="/upload" />
        ) : isLoggedIn() && !restricted ? (
          <Uploader handleLogout={handleLogout} />
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
};

export default PublicRoute;