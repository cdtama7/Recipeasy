import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./index.css";

function NextButton() {
    return (
        <Button as={Link} variant="recipeasy" to="/recipes" className="btn-block">Find Recipes</Button>
    );
  }
  
  export default NextButton;
  