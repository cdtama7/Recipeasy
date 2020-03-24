import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Instructions from "../components/Instructions/instructions"
import API from "../utils/API";

class Favorite extends Component {

    state = {
        favorites: []
    }

    componentDidMount() {
        API.getFavsForUser(this.props.user.sub)
            .then(res => this.setState({
                // We have two different structures for recipes because of the
                // special ingredient stuff, so just combine the different ingredient
                // lists on the regular recipes to match the "special" ones.
                favorites: res.data.map((favorite, i) => {
                    if (favorite.recipe.extendedIngredients !== undefined) {
                        return favorite
                    }
                    else {
                        favorite.recipe.extendedIngredients = favorite.recipe.usedIngredients.concat(favorite.recipe.missedIngredients);
                    }
                    return favorite;
                })
            })
            )
            .then(() => console.log(this.state.favorites))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container className="container-fluid">
                {this.state.favorites.map((favorite, i) => (
                    <Row key={i}>
                        <Col md={6}>
                            <Card>
                                <Card.Header>
                                    <Row>
                                        <Col md={4}>
                                            <img src={favorite.recipe.image} className="card-img"></img>
                                        </Col>
                                        <Col>
                                            <h3>{favorite.recipe.title}</h3>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body>
                                    <strong>Ingredients</strong><br/>
                                    <ListGroup>
                                        {favorite.recipe.extendedIngredients.map((ingredient, i) => (
                                            <ListGroupItem key={`ingredient-${ingredient.id}__${i}`}>
                                                {ingredient.original}
                                            </ListGroupItem>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Instructions
                            title={favorite.recipe.title}
                            id={favorite.recipe.id}
                        />
                    </Row>
                ))}
            </Container>
        )
    }
}

export default Favorite;
