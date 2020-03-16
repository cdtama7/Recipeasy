import React, { Component } from "react";
import Fridge from "../components/Fridge";
import Input from "../components/Input";
import API from "../utils/API";
import NextButton from "../components/NextButton";

class Fridge2 extends Component {

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
        console.log("user is: ");
        console.log(this.props.user);
        return (
            <div>
                <Input addItem={this.addItem} />

                <Fridge list={this.state.list} deleteItem={this.deleteItem} />
                <NextButton />
    
            </div>
        );
    }
}
export default Fridge2;
