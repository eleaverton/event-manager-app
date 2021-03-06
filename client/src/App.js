import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import LandingPage from "./pages/LandingPage2";
import EventProfile from "./pages/EventProfile";
import TestPage from "./pages/TestPage";
import {Nav1} from "./components/Nav1";
import Bootstrap from "react-bootstrap";
import {SignUpForm} from "./components/Form/SignUpForm";
import {LoginForm} from "./components/Form/LoginForm";
import TestAuthentication from "./components/TestAuthentication";
import Auth from "./modules/Auth";

const App = () => (
  <Router>
    <div>
      <Nav1 />
      <Route exact path="/" component={LandingPage} />
      <Route path="/events/:eventId" component={EventProfile} />
      <Route exact path="/test" component={TestPage} />
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/logout" component={LandingPage} />
      <Route exact path="/testauth" component={TestAuthentication} />
    </div>
  </Router>
);

export default App;
