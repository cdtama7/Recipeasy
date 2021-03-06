import React, { Component } from "react";
import { Col, Card, Button } from 'react-bootstrap';
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
        res.data[0].steps.map((step) => {
          this.setState({ stepNums: [...this.state.stepNums, step.number]});
          this.setState({ stepText: [...this.state.stepText, step.step]});
        })
    })
    .catch(err => this.setState({ error: err.message }))
  }
  
  render() {
  return (
    <React.Fragment>
      <Button type="submit" variant="recipeasy" className={this.state.active ? "inactive btn-block":"active btn-block"} id="get-instructions" onClick={this.getAndShowInstructions}>
        Get Instructions
      </Button>
      <Card className={this.state.active ? "active":"inactive"} id="instructions">
      <Card.Header><strong>Instructions</strong></Card.Header>
      <Card.Body>
        {/* <Card.Text> */}
          {this.state.stepNums.map((stepNum, i) => (
            <React.Fragment key={i}>
              {stepNum}. {this.state.stepText[i]} <br/><br/>
            </React.Fragment>
          ))}
        {/* </Card.Text> */}
      </Card.Body>
    </Card>
    </React.Fragment>
  )
}
  }

export default Instructions;