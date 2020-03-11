import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container"
import Fridge from "./pages/Fridge";
import Recipes from "./pages/Recipes";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
    return (
      <Router>
        <div>
          <Container>
            <Route exact path="/" component={Fridge} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/fridge" component={Fridge} />
            <Route exact path="/recipes" component={Recipes} />
          </Container>
          <Footer/>
        </div>
      </Router>
    );
  }

  export default App;
