import React, { Component } from "react";
import "./instructions.css";
import {Card} from 'react-bootstrap';
import APISpoonacular from "../../utils/APISpoonacular";

class Instructions extends Component {
  state = {
    id: this.props.id,
    stepNums: [],
    stepText: []
  }

  getAndShowInstructions = (id, event) => {
    // event.preventDefault();
    APISpoonacular.getInstructionsById(id)
      .then(res => {
        res.data.steps.map((step) => (
          this.setState({ stepNums: [...this.state.stepNums, step.number]}),
          this.setState({ stepText: [...this.state.stepText, step.step]})
        ))
      .catch(err => this.setState({ error: err.message }))
    })
  }
  
  render() {
  return (
    <div className="col-md-6">
      <button type="submit" id="get-instructions" onClick={this.getAndShowInstructions} className="btn btn-success">
        Get Instructions
      </button>
      <Card id="instructions">
      <Card.Header>{this.props.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          {this.state.stepNums.map((stepNum, i) => (
            <h3>{stepNum} + "."</h3>,
          <p>{this.state.stepText}</p>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
  }

export default Instructions;