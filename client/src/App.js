import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./Jumbotron";
import Body from "./Body";
import Nav from "./Nav";
import HomeCarousel from "./HomeCarousel";

class App extends Component {
  render() {
    return (
      <div className="App">       
          
        <Nav />
        
        <Jumbotron />
        <p className="App-intro">some text here</p>
      	<Body />
      	
      	<HomeCarousel />
    
      


      </div>
    );
  }
}

export default App;
