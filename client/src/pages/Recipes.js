import React, { Component } from "react";
import API from "../utils/APISpoonacular";
import Search from "../components/search";
import Container from "../components/Container"

const user = {
  "name":"Taylor",
  "diet":"normal",
  "fridge":["cheese","milk","eggs","flour","beef"]
}
class Recipes extends Component {
  state = {
    // search: "",
    name: user.name,
    diet: user.diet,
    fridge: user.fridge
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {
  //   API.getBaseBreedsList()
  //     .then(res => this.setState({ breeds: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if(this.state.diet !== "normal") {
  //     API.getUserRecipes(this.state.diet, this.state.fridge)
  //       .then(res => {
  //         if (res.data.status === "error") {
  //           throw new Error(err);
  //         }
  //         this.setState({ results: res.data.message});
  //       })
  //       .catch(err => this.setState({ error: err.message }));
  //   };
  // };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Recipe Search</h1>
          <Search
            handleFormSubmit={this.handleFormSubmit}
            // handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          {/* <SearchResults results={this.state.results} /> */}
        </Container>
      </div>
    );
  }
}

export default Recipes;
