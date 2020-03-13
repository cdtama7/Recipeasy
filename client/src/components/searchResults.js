import React from "react";
// import "./style.css";

function SearchResults(props) {
  return (
    <div>
      {props.results.map(result => (
        <ul key={result.id} className="list-group search-results">

        <li className="list-group-item">
          <h2 alt="recipe"> {result.title} </h2>
          {result.missedIngredients.map(missedIngredient => (
              <p alt="ingredient" key={missedIngredient.id}> {missedIngredient.name} </p>
          ))}
          {result.usedIngredients.map(usedIngredient => (
              <p alt="ingredient" key={usedIngredient.id}> {usedIngredient.name} </p>
          ))}
        </li>
    </ul>

      ))}
      </div>
  );
}

export default SearchResults;
