import React from "react";
import { Link } from 'react-router-dom';
import "./index.css";




function NextButton() {
    return (
        <div>
        <Link className="btn btn-primary btn-lg btn-block" to="/recipes">Find Recipes</Link>
        </div>
    );
  }
  
  export default NextButton;
  