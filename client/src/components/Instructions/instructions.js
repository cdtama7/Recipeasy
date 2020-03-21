import React, { Component } from "react";
import {Card} from 'react-bootstrap';
import "./instructions.css";
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
      <button type="submit" className={this.state.active ? "inactive":"active"} id="get-instructions" onClick={this.getAndShowInstructions}>
        Get Instructions
      </button>
      <Card className={this.state.active ? "active":"inactive"} id="instructions">
      <Card.Header>{this.props.title}</Card.Header>
      <Card.Body>
        {/* <Card.Text> */}
          {this.state.stepNums.map((stepNum, i) => (
            <div>
              {stepNum}.
              <p>{this.state.stepText[i]}</p>
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