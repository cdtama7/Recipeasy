import React from "react";
import Instructions from "./Instructions/instructions"
// import "./style.css";

function SearchResults(props) {

  return (
    <div className="container-fluid">
      {props.results.map((result, i) => (
        <div className="row">
          <div className="col-md-6">
            <div key={i} className="card mb-3" style={{maxWidth: "540px"}}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={result.image} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 alt="recipe"> {result.title} </h2>
                    <ul key={result.id} className="list-group search-results">Ingredients
                      {result.missedIngredients.map(missedIngredient => (
                        <li key={missedIngredient.id} className="list-group-item">
                        <p alt="ingredient" > {missedIngredient.original} </p>
                        </li>
                      ))}
                      {result.usedIngredients.map(usedIngredient => (
                        <li key={usedIngredient.id} className="list-group-item">
                          <p alt="ingredient" > {usedIngredient.original} </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Instructions
            title={result.title}
            id={result.id}
          />
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
