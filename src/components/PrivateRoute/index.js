import { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from "../../state/providers/auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { logedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!logedIn ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
}

export default PrivateRoute;
