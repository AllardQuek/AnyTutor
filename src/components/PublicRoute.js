import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = ({ component: Component, isLogin, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser && isLogin ? (
          <Redirect to="/about" />
        ) : (
          <Component {...props} {...rest} />
        );
      }}
    />
  );
};

export default PublicRoute;
