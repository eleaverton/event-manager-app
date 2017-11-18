import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EventProfile from "./pages/EventProfile";
import TestPage from "./pages/TestPage";
import Nav from "./components/Nav";
import Bootstrap from "react-bootstrap";


const App = () => (
  <Router>
    <div>
      <Nav />
      
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/event" component={EventProfile} />
        <Route exact path="/test" component={TestPage} />
      
    </div>
  </Router>
);

  export default App; 

