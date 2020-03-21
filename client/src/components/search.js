import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Search(props) {

  // function sendDiet(diet) {
  //   // this.props.handleDietButtonClick(diet)
  //   console.log(diet)
  // }
  
  return (
    <React.Fragment>
      <h3>Choose your diet</h3>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary active" onClick={props.handleNormalClick}>
          <input type="radio" name="options" id="normalSearchToggle" defaultChecked/> Normal
        </label>
        <label className="btn btn-secondary" onClick={props.handleKetoClick}>
          <input type="radio" name="options" id="ketoSearchToggle"/> Keto
        </label>
        <label className="btn btn-secondary" onClick={props.handleVeganClick}>
          <input type="radio" name="options" id="veganSearchToggle"/> Vegan
        </label>
        <label className="btn btn-secondary" onClick={props.handleLowFatClick}>
          <input type="radio" name="options" id="low-fatSearchToggle"/> Low-Fat
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
