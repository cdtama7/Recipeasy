import React, { Component } from "react";
import API from "../utils/API";
import APISpoonacular from "../utils/APISpoonacular";
import Search from "../components/search";
import SearchResults from "../components/searchResults"
import Container from "../components/Container"

class Recipes extends Component {
  state = {
    // search: "",
    diet: "",
    results: [],
    ingredients: [],
    fridge: []
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getItemsForUser(this.props.user.sub)
      .then(res => this.setState({ fridge: res.data.map(item => item.name)}))
      .then(() => console.log(this.state.fridge))
      .catch(err => console.log(err));
  }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  handleNormalClick = () => {
    this.setState({ diet: "normal" });
    console.log(this.state.diet);
    console.log(this.state.fridge)
  }

  handleKetoClick = () => {
    this.setState({ diet: "keto" })
    console.log(this.state.diet)
  }

  handleVeganClick = () => {
    this.setState({ diet: "vegan" })
    console.log(this.state.diet)
  }

  handleLowFatClick = () => {
    this.setState({ diet: "low-fat" })
    console.log(this.state.diet)
  }

  handleVegetarianClick = () => {
    this.setState({ diet: "vegetarian" })
    console.log(this.state.diet)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.diet === "normal") {
      APISpoonacular.getUserRecipes(this.state.fridge)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error();
          }
          this.setState({ results: res.data });
        })
        .catch(err => this.setState({ error: err.message }));
    };
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Recipe Search</h1>
          <Search
            handleNormalClick={this.handleNormalClick}
            handleKetoClick={this.handleKetoClick}
            handleVeganClick={this.handleVeganClick}
            handleLowFatClick={this.handleLowFatClick}
            handleVegetarianClick={this.handleVegetarianClick}
            handleFormSubmit={this.handleFormSubmit}
          // handleInputChange={this.handleInputChange}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Recipes;
