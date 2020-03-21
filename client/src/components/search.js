import React from "react";
// import "./style.css";

function Search(props) {
  
  return (
    <React.Fragment>
      <h3>Choose your diet</h3>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary active" onClick={props.handleNormalClick}>
          <input type="radio" name="options" id="normalSearchToggle" defaultChecked/> Normal
        </label>
        <label className="btn btn-secondary" onClick={props.handleGlutenFreeClick}>
          <input type="radio" name="options" id="glutenFreeSearchToggle"/> Gluten Free
        </label>
        <label className="btn btn-secondary" onClick={props.handleVeganClick}>
          <input type="radio" name="options" id="veganSearchToggle"/> Vegan
        </label>
        <label className="btn btn-secondary" onClick={props.handleVegetarianClick}>
          <input type="radio" name="options" id="vegetarianSearchToggle"/> Vegetarian
        </label>
      </div>
      <br/>
      <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
        Search
      </button>
      </React.Fragment>
  );
}

export default Search;
