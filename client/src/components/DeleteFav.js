import React, { Component } from "react";
import API from "../../utils/API";
import "./index.css";
//

const { Octicon, x } = require("octicons-react");

class DeleteFav extends Component {
  state = {
    fav: false
  };

  componentDidMount = () => {
    API.getFavsForUserByRecipeId(this.props.userId, this.props.recipe.id).then(
      result => {
        this.setState({ fav: result.data.length !== 0 });
        console.log(result);
      }
    );
    console.log(this.props.recipe);
  };

  getBtnClass = () => {
    return "btn btn-lg btn-block btn-recipeasy";
  };
  handleClick = event => {
    API.deleteFavsForUserByRecipeId(
      this.props.userId,
      this.props.recipe.id
    ).then(() => {
      this.setState({ fav: false });
    });
  };

  render() {
    console.log(
      "recipe id: " + this.props.recipe.id + " is fav: " + this.state.fav
    );
    return (
      <div>
        <button className={this.getBtnClass()} onClick={this.handleClick}>
          <Octicon icon={x} />
        </button>
      </div>
    );
  }
}
export default DeleteFav;
