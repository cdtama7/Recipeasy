import React, { Component } from "react";
import "./instructions.css";
import {Card} from 'react-bootstrap';
import APISpoonacular from "../../utils/APISpoonacular";

class Instructions extends Component {
  state = {
    id: this.props.id,
    stepNums: [],
    stepText: [],
    active: false
  }

  getAndShowInstructions = () => {
    console.log(this.state.id);
    APISpoonacular.getInstructionsById(this.state.id)
      .then(res => {
        console.log(res)
        this.setState({ active: true})
        res.data[0].steps.map((step) => (
          this.setState({ stepNums: [...this.state.stepNums, step.number]}),
          this.setState({ stepText: [...this.state.stepText, step.step]})
        ))
    })
    .catch(err => this.setState({ error: err.message }))
  }
  
  render() {
  return (
    <div className="col-md-6">
      <button type="submit" id="get-instructions" onClick={this.getAndShowInstructions} className="btn btn-success">
        Get Instructions
      </button>
      <Card className={this.state.active ? "active":"inactive"} id="instructions">
      <Card.Header>{this.props.title}</Card.Header>
      <Card.Body>
        {/* <Card.Text> */}
          {this.state.stepNums.map((stepNum, i) => (
            <div>
              {stepNum}.
              <p>{this.state.stepText}</p>
            </div>
          ))}
        {/* </Card.Text> */}
      </Card.Body>
    </Card>
    </div>
  )
}
  }

export default Instructions;