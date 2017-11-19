import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import EventBox from "../components/EventBox";
import Nav1 from "../components/Nav1";
import HomeCarousel from "../components/HomeCarousel";
import Footer from "../components/Footer";



class App extends Component {
  render() {
    
    return <div className="App">
           <HomeCarousel />
           <div />
        <div className="container">
          <div className="row">
            <EventBox />
            <EventBox />
            <EventBox />
          </div>
          <div className="row">
            <EventBox />
            <EventBox />
            <EventBox />
          </div>
          <div className="row">
            <EventBox />
            <EventBox />
            <EventBox />
          </div>
        </div>
        <div>
        <Footer />
        </div>
      </div>;
  }
}

export default App;
