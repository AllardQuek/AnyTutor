import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  console.log("PUBLIC");

  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} {...rest} />;

        // currentUser ? (
        //   <Component {...props} {...rest} />
        // ) : (
        //   <Redirect to="/about" />
        // );
      }}
    />
  );
};

export default PublicRoute;
