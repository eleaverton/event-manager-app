import React, { Component } from "react";
import "../App.css";
import HomeCarousel from "../components/HomeCarousel";
import EventBox from "../components/EventBox";
import ThisJumbotron from "../components/ThisJumbotron";
import Footer from "../components/Footer";
import {SignUpForm, CreateEventForm} from "../components/Form";


class App extends Component {
  render() {
    return (
      <div className="App">
    

        <ThisJumbotron />
        <p className="App-intro">some text here</p>
        <SignUpForm />
        <CreateEventForm />
        
        

        <Footer />

      </div>
    );
  }
}

export default App;
