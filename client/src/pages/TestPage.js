import React, { Component } from "react";
import "../App.css";
import Jumbotron from "../components/Jumbotron";
// import Body from "./components/Body";
import Nav from "../components/Nav";
import HomeCarousel from "../components/HomeCarousel";
import EventBox from "../components/EventBox";
import Bootstrap from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Jumbotron />
        <p className="App-intro">some text here</p>
        <EventBox />

        <HomeCarousel />
      </div>
    );
  }
}

export default App;
