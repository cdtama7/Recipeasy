import React, { Component } from "react";
import { Row, Col } from "react-bootstrap"
import Input from "../components/Input";
import Items from "../components/Items";
import NextButton from "../components/NextButton";
import API from "../utils/API";

class Fridge extends Component {

    state = {
        list: [],
    };
    addItem = text => {
        API.saveItem({
            name: text,
            userId: this.props.user.sub,
        })
            .then(res => this.loadItems())
            .catch(err => console.log(err));
    }

    deleteItem = id => {
        API.deleteItem(id)
            .then(res => this.loadItems())
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getItemsForUser(this.props.user.sub)
            .then(res => {
                console.log(res);
                    this.setState({ list: res.data });
                }
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md={6}>
                        <Input addItem={this.addItem} />
                    </Col>
                    <Col md={6}>
                        <Items list={ this.state.list } deleteItem={ this.deleteItem }/>
                        <NextButton />
                    </Col>
                </Row>   
            </React.Fragment>
        );
    }
}
export default Fridge;
