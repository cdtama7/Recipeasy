import React, { Component } from "react";
import Fridge from "./components/Fridge";
import Footer from "./components/Footer";
import Input from "./components/Input";
import API from "./utils/API";

class App extends Component {

    state = {
        list: [],
    };
    addItem = text => {
        API.saveItem({
            name: text
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
        API.getItems()
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
                <Footer />
            </div>
        );
    }
}
export default App;
