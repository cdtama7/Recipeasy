import React, { Component } from "react";
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
    alert(`You have entered ${this.state.text}`);
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
            <label htmlFor="formGroupExampleInput">Tell us what you've got.</label>
            <input value = {this.state.text} name = "text" onChange = {this.handleInputChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Whats in your fridge?" />
            <button onClick = {this.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
        </div>
        </div>
    );
}
}
export default Input;
