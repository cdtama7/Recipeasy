import React,  { Component } from "react";
import Fridge from "./components/Fridge";
import Footer from "./components/Footer";
import Input from "./components/Input";

class App extends Component {
  
    state = {
      list: [],
    };
addItem = text => {
 this.setState(state => {
     const list = state.list.concat(text);
     return {
         list
     }
 });

 console.log("list: " + this.state.list);
    

}

render () {
    return (
        <div>
            <Input addItem = { this.addItem }/>
            <Fridge list = { this.state.list }/>
            <Footer />
        </div>
    );
}
}
export default App;
