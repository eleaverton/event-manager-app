import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import EventBox from "../components/EventBox";
import Nav from "../components/Nav";
import HomeCarousel from "../components/HomeCarousel";


class App extends Component {
  render() {
    return <div className="App">
        <Nav />
        <HomeCarousel />
        <div></div>
        <div className="row">
                <EventBox />
                <EventBox />
                <EventBox />
        </div>
      </div>;
  }
}

export default App;
