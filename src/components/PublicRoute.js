import { Route, Redirect } from "react-router-dom";
import Uploader from "./Uploader";

const PublicRoute = ({
  component: Component,
  restricted,
  user,
  handleLogout,
  ...rest
}) => {
  const loggedIn = user ? true : false;
  console.log(loggedIn);

  return (
    // restricted = false meaning public route, else restricted route
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn && restricted) {
          return <Redirect to="/" />;
        } else if (loggedIn && !restricted) {
          return <Uploader handleLogout={handleLogout} />;
        } else {
          return <Component {...props} {...rest} />;
        }
      }}

      // render={(props) =>
      //   loggedIn && restricted ? (
      //     <Redirect to="/" />
      //   ) : (
      //     <Component {...props} {...rest} />
      //   )
      // }
    />
  );
};

export default PublicRoute;
