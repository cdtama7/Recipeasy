import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth0 } from '../contexts/auth0-context';

function StartScreen() {
  const { isAuthenticated } = useAuth0();

  return (
    <React.Fragment>
      { isAuthenticated && (<Redirect to="/fridge"/>) }
    </React.Fragment>
  );

}

export default StartScreen;
