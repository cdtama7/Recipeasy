import React, { Component } from "react";
import { Button } from 'react-bootstrap';

import "./index.css";

class Input extends Component {
    state = {
        text: ""
    };

handleInputChange = event => {
    let { name, value} = event.target;
    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      text: ""
    });
    console.log("we submitted");
    this.props.addItem(this.state.text)
  };


render () {
    return (
        <div>
        <div className="input">
            <label htmlFor="formGroupExampleInput">Add a new item:</label>
            <input value = {this.state.text} name = "text" onChange = {this.handleInputChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Whats in your fridge?" />
            <br/>
            <Button variant="primary" onClick = {this.handleFormSubmit} type="submit" >Add to Fridge</Button>
        </div>
        </div>
    );
}
}
export default Input;
