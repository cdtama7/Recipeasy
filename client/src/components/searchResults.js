import React from "react";
// import "./style.css";

function SearchResults(props) {
  return (
    <div>
    {props.results.map((result, i) => (
      <div className="card mb-3" style={{maxWidth: "540px;"}}>
        <div key={i} className="row no-gutters">
          <div className="col-md-4">    
            <img src={result.image} className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <ul key={result.id} className="list-group search-results">
                <li className="list-group-item">
                  <h2 alt="recipe"> {result.title} </h2>
                  {result.missedIngredients.map(missedIngredient => (
                    <p alt="ingredient" key={missedIngredient.id}> {missedIngredient.original} </p>
                  ))}
                  {result.usedIngredients.map(usedIngredient => (
                    <p alt="ingredient" key={usedIngredient.id}> {usedIngredient.original} </p>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
  );
}

export default SearchResults;
