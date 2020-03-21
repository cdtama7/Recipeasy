import Container from "./components/Container";
import Fridge2 from "./pages/Fridge";
import Recipes from "./pages/Recipes";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import LoginForm from "./components/loginForm";
import Footer from "./components/Footer";
import React, { Component, useContext } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import ProtectedRoute from "./components/common/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import StartScreen from "./components/StartScreen";
import { useAuth0 } from './contexts/auth0-context';

function App() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/fridge" render={(props) => <Fridge2 {...props} user={user} />}/>
            <ProtectedRoute path="/recipes" render={(props) => <Recipes {...props} user={user} />} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" component={StartScreen} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
        </React.Fragment>
    </Router>
  );
}

export default App;
