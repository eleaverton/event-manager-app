import React, { Component } from "react";
import "../App.css";
import HomeCarousel from "../components/HomeCarousel";
import EventBox from "../components/EventBox";
import ThisJumbotron from "../components/ThisJumbotron";
import Footer from "../components/Footer";
import ReactForm from "../components/ReactForm";

class App extends Component {
  render() {
    return (
      <div className="App">
    

        <ThisJumbotron />
        <p className="App-intro">some text here</p>

        <ReactForm />

        <Footer />
      </div>
    );
  }
}

export default App;
