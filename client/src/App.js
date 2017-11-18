import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Body from "./components/Body";
import Nav from "./components/Nav";
import HomeCarousel from "./components/HomeCarousel";
import {SignUpForm} from "./components/Form";



class App extends Component {
  render() {
    return (
      <div className="App">       
          
        <Nav />
        
        <Jumbotron />
        <p className="App-intro">some text here</p>
      	<Body />
      	
      	<HomeCarousel />
        <SignUpForm />
    
     
    
      


      </div>
    );
  }
}

export default App;
