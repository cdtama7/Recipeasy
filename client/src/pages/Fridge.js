import React, { Component } from "react";
import Fridge from "../components/Fridge";
import Footer from "../components/Footer";
import Input from "../components/Input";
import API from "../utils/API";
import NextButton from "../components/NextButton";
import auth from "../services/authService";

// This is weird, needs to work with real auth.
let userId = "5e6a6be60e9ea116adc183cc";

class Fridge2 extends Component {

    state = {
        list: [],
    };
    addItem = text => {
        API.saveItem({
            name: text,
            userId: userId,
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


        API.getItemsForUser(userId)
            .then(res => {
                console.log(res);
                    this.setState({ list: res.data });
                }
            )
            .catch(err => console.log(err));
    };



    render() {
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
