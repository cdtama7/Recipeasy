import React, { Component } from "react";
import API from "../../utils/API"
import "./index.css";

const { Octicon, heart } = require('octicons-react');

class FavButton extends Component {
    state = {
        fav: false,
    };

    componentDidMount = () => {
        API.getFavsForUserByRecipeId(this.props.userId, this.props.recipe.id)
            .then(result => {
                this.setState({ fav: result.data.length !== 0 })
                console.log(result);
            });
        console.log(this.props.recipe);
    }

    getBtnClass = () => {
        if (this.state.fav) {
            return "btn btn-lg btn-block btn-danger";
        }
        else {
            return "btn btn-lg btn-block btn-recipeasy";
        }
    }
    handleClick = event => {
        if (!this.state.fav) {
            API.saveFav({
                recipeId: this.props.recipe.id,
                recipe: this.props.recipe,
                userId: this.props.userId,

            })
            .then(()=> {
                this.setState({ fav: true });
            });
            
        } else {
            API.deleteFavsForUserByRecipeId(this.props.userId, this.props.recipe.id)
            .then(()=> {
                this.setState({ fav: false });
            });
        }
    }

    render() {
        console.log("recipe id: " + this.props.recipe.id + " is fav: " + this.state.fav);
        return (
            <div>
                <button className={this.getBtnClass()} onClick={this.handleClick}>
                    <Octicon icon={heart} />
                </button>
            </div>
        );
    }
}
export default FavButton;
