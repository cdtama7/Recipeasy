import Container from "./components/Container";
import Fridge from "./pages/Fridge";
import Recipes from "./pages/Recipes";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import LoginForm from "./components/loginForm";
import Footer from "./components/Footer";
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";

import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        {/*<ToastContainer />*/}
        <NavBar user={user} />
        <div>
          <main className="container">
            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <Route path="/fridge" component={Fridge} />
              <Route path="/recipes" component={Recipes} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/" component={LoginForm} />
              <Redirect to="/not-found" />
            </Switch>
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
