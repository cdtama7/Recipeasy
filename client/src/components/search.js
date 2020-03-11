import React from "react";
import Container from "./Container"
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Search(props) {
  return (
    <Container>
      <h1>Find Your Custom Recipes!</h1>
      <button type="submit"onClick={props.handleFormSubmit} className="btn btn-success">
        Search
      </button>
    </Container>
  );
}

export default Search;
