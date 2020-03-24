import React, { Component } from "react";
import API from "../utils/API";
import APISpoonacular from "../utils/APISpoonacular";
import APIYoutube from "../utils/APIYoutube";
import Search from "../components/search";
import SearchResults from "../components/searchResults";
import YoutubeSearchResults from "../components/YoutubeSearchResults"
import { Container, Row, Col, Spinner } from "react-bootstrap"

class Recipes extends Component {
  state = {
    // search: "",
    diet: "normal",
    results: [],
    ingredients: [],
    fridge: [],
    list: [],
    specialIDs: [],
    specialIndexes: [],
    specialResults: [],
    youtubeVideos: [],
    searchInProgress: false,
    resultsReady: false,
    youtubeReady: false,
  };

  componentDidMount() {
    API.getItemsForUser(this.props.user.sub)
      .then(res => this.setState({ fridge: res.data.map(item => item.name) }))
      .then(() => console.log(this.state.fridge))
      .catch(err => console.log(err));
  }

  handleNormalClick = () => {
    this.setState({ results: [] });
    this.setState({ diet: "normal" });
    this.setState({youtubeVideos: []});
    console.log(this.state.diet);
  }

  handleGlutenFreeClick = () => {
    this.setState({ specialResults: [] });
    this.setState({ diet: "gluten free" })
    this.setState({youtubeVideos: []});
    console.log(this.state.diet)
  }

  handleVeganClick = () => {
    this.setState({ specialResults: [] });
    this.setState({ diet: "vegan" })
    this.setState({youtubeVideos: []});
    console.log(this.state.diet)
  }

  handleVegetarianClick = () => {
    this.setState({ specialResults: [] });
    this.setState({ diet: "vegetarian" })
    this.setState({youtubeVideos: []});
    console.log(this.state.diet)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ results: [], searchInProgress: true, resultsReady: false, youtubeReady: false })
    if (this.state.diet === "normal") {
      APISpoonacular.getUserRecipes(this.state.fridge)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error();
          }
          this.setState({ results: res.data, resultsReady: true });
          console.log(this.state.results);
        })
        .catch(err => this.setState({ error: err.message }));

      APIYoutube.getVideos(this.state.fridge)
        .then(res => {
          this.setState({ youtubeVideos: res.data.items, youtubeReady: true })
        })
        .catch(err => this.setState({ error: err.message }));

    }
    else {
      APISpoonacular.getSpecialUserRecipes(this.state.fridge)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error();
          }
          this.setState({ specialResults: [] })
          this.setState({ specialIDs: [] })
          res.data.map(result => (
            this.setState({ specialIDs: [...this.state.specialIDs, result.id] })
          ))
          console.log(this.state.specialIDs)
          APISpoonacular.getInformationBulk(this.state.specialIDs)
            .then(res => {
              if (res.data.status === "error") {
                throw new Error();
              }
              switch (this.state.diet) {
                case "vegetarian":
                  this.setState({ specialIndexes: [] });
                  res.data.map((result, i) => {
                    if (result.vegetarian === true) {
                      this.setState({ specialIndexes: [...this.state.specialIndexes, i] })
                    };
                  });
                  break;
                case "vegan":
                  this.setState({ specialIndexes: [] });
                  res.data.map((result, i) => {
                    if (result.vegan === true) {
                      this.setState({ specialIndexes: [...this.state.specialIndexes, i] })
                    };
                  });
                  break;
                case "gluten free":
                  this.setState({ specialIndexes: [] });
                  res.data.map((result, i) => {
                    if (result.glutenFree === true) {
                      this.setState({ specialIndexes: [...this.state.specialIndexes, i] })
                    };
                  });
              }

              console.log(res.data)
              let numResults = Math.min(this.state.specialIndexes.length, 5);
              for (let i = 0; i < numResults; i++) {
                console.log(res.data[this.state.specialIndexes[i]])
                this.setState({ specialResults: [...this.state.specialResults, res.data[this.state.specialIndexes[i]]]})
                this.setState({ resultsReady: true });
              }
            })

          console.log(this.state.specialIDs)
            .catch(err => this.setState({ error: err.message }));
        })
        .catch(err => this.setState({ error: err.message }));

      APIYoutube.getVideos(this.state.fridge, this.state.diet)
        .then(res => {
          this.setState({ youtubeVideos: res.data.items, youtubeReady: true })
        })
        .catch(err => this.setState({ error: err.message }));
    };
  }

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center labelBig">Recipe Search</h1>
          <Search
            handleNormalClick={this.handleNormalClick}
            handleGlutenFreeClick={this.handleGlutenFreeClick}
            handleVeganClick={this.handleVeganClick}
            handleVegetarianClick={this.handleVegetarianClick}
            handleFormSubmit={this.handleFormSubmit}
          />
          <br />
          <br />

          {this.state.searchInProgress && this.state.resultsReady && this.state.youtubeReady && (
            <Row>
              <Col md={6}>
                <SearchResults
                  results={this.state.results}
                  specialResults={this.state.specialResults}
                  diet={this.state.diet}
                />
              </Col>
              <Col>
                <YoutubeSearchResults videos={this.state.youtubeVideos} />
              </Col>

            </Row>)}

          {this.state.searchInProgress && (!this.state.resultsReady || !this.state.youtubeReady) && (
            <div className="text-center">
              <Spinner animation="border" variant="dark" />
            </div>
          )}

        </Container>
      </div>
    );
  };
};

export default Recipes;
