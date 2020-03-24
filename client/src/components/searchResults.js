import React, { Component } from "react";
import Instructions from "./Instructions/instructions"
import FavButton from "./FavButton"
import { useAuth0 } from '../contexts/auth0-context';

function SearchResults(props) {
  const { user } = useAuth0(); 
  if (props.diet === "normal") {
    return (
      <div className="container-fluid">
        {props.results.map((result, i) => (
          <div key={"search result 1" + i} className="row">
            <div className="col-md-6">
              <div  className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={result.image} className="card-img" alt="..."/><br/>
                    <FavButton recipe={result} userId={user.sub}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 alt="recipe"> {result.title} </h2>
                      <ul  className="list-group search-results">Ingredients
                        {result.missedIngredients.map((missedIngredient,i) => (
                          <li key={`${missedIngredient.id}__${i}`} className="list-group-item">
                          <p alt="ingredient" > {missedIngredient.original} </p>
                          </li>
                        ))}
                        {result.usedIngredients.map((usedIngredient, i) => (
                          <li key={`${usedIngredient.id}__${i}`} className="list-group-item">
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
  else {
    return (
      <div className="container-fluid">
        {props.specialResults.map((specialResult, i) => (
          <div key={i} className="row">
            <div className="col-md-6">
              <div  className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                  <img src={specialResult.image} className="card-img" alt="..."/><br/>
                    <FavButton recipe={specialResult} userId={user.sub}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 alt="recipe"> {specialResult.title} </h2>
                      <ul className="list-group search-results">Ingredients
                        {specialResult.extendedIngredients.map((ingredient, i) => (
                          <li key={`${ingredient.id}__${i}`} className="list-group-item">
                            <p alt="ingredient" > {ingredient.original} </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Instructions
              title={specialResult.title}
              id={specialResult.id}
            />
          </div>
        ))}
      </div>
    );
  }
};
export default SearchResults;