import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from '../../contexts/auth0-context';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated)
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
