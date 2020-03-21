import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth0 } from '../../contexts/auth0-context';
import { Jumbotron } from 'react-bootstrap';
import "./index.css";

function StartScreen() {
  const { isAuthenticated } = useAuth0();

  return (
    <React.Fragment>
      { isAuthenticated && (<Redirect to="/fridge"/>) }
      <Jumbotron className = "jumb">
        <h1 className="header"><span className = "one">RecipEasy   </span>     is a tool that is designed to provide recipes on demand. With <span className = "two">three easy steps</span>   , you will get closer to <span className = "two">simple life.</span></h1>
        <br />
        <h2 className="text">Step 1. <span className = "two">Login</span> or <span className = "two">Create</span> an account if you are vising us the first time.</h2>
        <br />
        <h2 className="text">Step 2. Review your <span className = "two">"fridge"</span> and update it to include all of the produce you might have at home.</h2>
        <br />
        <h2 className="text">Step 3. <span className = "two">Find recipes</span> that match your ingridients.</h2> 
        
      </Jumbotron>
    </React.Fragment>
  );

}

export default StartScreen;
