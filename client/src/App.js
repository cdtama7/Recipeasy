import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Fridge from "./pages/Fridge";
import Recipes from "./pages/Recipes";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import LoginForm from "./components/loginForm";
import Footer from "./components/Footer";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import ProtectedRoute from "./components/common/protectedRoute";
import StartScreen from "./components/StartScreen";
import { useAuth0 } from './contexts/auth0-context';
import "./App.css";

function App() {
  const { user } = useAuth0();
  return (
      <React.Fragment>
        <NavBar />
        <main class="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/fridge" render={(props) => <Fridge {...props} user={user} />} />
            <ProtectedRoute path="/recipes" render={(props) => <Recipes {...props} user={user} />} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" component={StartScreen} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
  );
}

export default App;
