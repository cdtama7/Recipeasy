import React, { Component } from "react";
import API from "../utils/API";
import APISpoonacular from "../utils/APISpoonacular";
import Search from "../components/search";
import SearchResults from "../components/searchResults";
import Container from "../components/Container";
//import { Container } from "react-bootstrap"

class Recipes extends Component {
  state = {
    // search: "",
    diet: "",
    results: [],
    ingredients: [],
    fridge: [],
    list: [],
    specialIDs: [],
    specialIndexes: [],
    specialResults: []
  };

  componentDidMount() {
    API.getItemsForUser(this.props.user.sub)
      .then(res => this.setState({ fridge: res.data.map(item => item.name)}))
      .then(() => console.log(this.state.fridge))
      .catch(err => console.log(err));
  }

  handleNormalClick = () => {
    this.setState({ results: []});
    this.setState({ diet: "normal" });
    console.log(this.state.diet);
  }

  handleGlutenFreeClick = () => {
    this.setState({ specialResults: []});
    this.setState({ diet: "gluten free" })
    console.log(this.state.diet)
  }

  handleVeganClick = () => {
    this.setState({ specialResults: []});
    this.setState({ diet: "vegan" })
    console.log(this.state.diet)
  }

  handleVegetarianClick = () => {
    this.setState({ specialResults: []});
    this.setState({ diet: "vegetarian" })
    console.log(this.state.diet)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ results: []})
    if (this.state.diet === "normal") {
      APISpoonacular.getUserRecipes(this.state.fridge)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error();
          }
          this.setState({ results: res.data });
          console.log(this.state.results);
        })
        .catch(err => this.setState({ error: err.message }));
    }
    else {
      APISpoonacular.getSpecialUserRecipes(this.state.fridge)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error();
          }
          this.setState({ specialResults: []})
          this.setState({ specialIDs: []})
          res.data.map(result => (
            this.setState({ specialIDs: [...this.state.specialIDs, result.id]})
          ))
          console.log(this.state.specialIDs)
          APISpoonacular.getInformationBulk(this.state.specialIDs)
            .then(res => {
              if (res.data.status === "error") {
                throw new Error();
              }
              switch(this.state.diet) {
                case "vegetarian":
                  this.setState({ specialIndexes: []});
                  res.data.map((result,i) => {
                  if (result.vegetarian === true) {
                    this.setState({ specialIndexes: [...this.state.specialIndexes, i]})
                  };
                });
                  break;
                case "vegan":
                  this.setState({ specialIndexes: []});
                  res.data.map((result,i) => {
                  if (result.vegan === true) {
                    this.setState({ specialIndexes: [...this.state.specialIndexes, i]})
                  };
                });
                  break;
                case "gluten free":
                  this.setState({ specialIndexes: []});
                  res.data.map((result,i) => {
                  if (result.glutenFree === true) {
                    this.setState({ specialIndexes: [...this.state.specialIndexes, i]})
                  };
                });
              }
              console.log(res.data)
              for (let i = 0 ; i < 5 ; i++) {
                console.log(res.data[this.state.specialIndexes[i]])
                this.setState({ specialResults: [...this.state.specialResults, res.data[this.state.specialIndexes[i]]]})
              }

            })
            console.log(this.state.specialIDs)
            .catch(err => this.setState({ error: err.message }));
        })
        .catch(err => this.setState({ error: err.message }));

      };
  }

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Recipe Search</h1>
          <Search
            handleNormalClick={this.handleNormalClick}
            handleGlutenFreeClick={this.handleGlutenFreeClick}
            handleVeganClick={this.handleVeganClick}
            handleVegetarianClick={this.handleVegetarianClick}
            handleFormSubmit={this.handleFormSubmit}
          />
          <SearchResults 
            results={this.state.results}
            specialResults={this.state.specialResults}
            diet={this.state.diet}
          />
        </Container>
      </div>
    );
  };
};

export default Recipes;
