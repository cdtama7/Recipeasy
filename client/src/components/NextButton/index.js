import React from "react";
import "./index.css";




function NextButton() {
    return (
        <div>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => window.location = "/recipes"}>Done</button>
        </div>
    );
  }
  
  export default NextButton;
  