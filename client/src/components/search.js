import React from "react";
import { Button } from 'react-bootstrap';
// import "./style.css";

function Search(props) {
  
  return (
    <div className="text-center recipeSearch">
      <div className="labelOne">Choose your diet</div>
      <div className="btn-group btn-group-large btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-large btn-secondary active" onClick={props.handleNormalClick}>
          <input type="radio" name="options" id="normalSearchToggle" defaultChecked/>Unrestricted
        </label>
        <label className="btn btn-large btn-secondary" onClick={props.handleGlutenFreeClick}>
          <input type="radio" name="options" id="glutenFreeSearchToggle"/>Gluten Free
        </label>
        <label className="btn btn-large btn-secondary" onClick={props.handleVeganClick}>
          <input type="radio" name="options" id="veganSearchToggle"/>Vegan
        </label>
        <label className="btn btn-large btn-secondary" onClick={props.handleVegetarianClick}>
          <input type="radio" name="options" id="vegetarianSearchToggle"/>Vegetarian
        </label>
      </div>
      <br/>
      <Button type="submit" onClick={props.handleFormSubmit} variant="recipeasy" style={{"width": "345px"}}>
        Search
      </Button>
      </div>
  );
}

export default Search;
