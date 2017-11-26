import React, {Component} from 'react';  
import Bootstrap from "react-bootstrap";
import {EventDetails} from "../components/EventDetails";
import ThisJumbotron from "../components/ThisJumbotron";


//need to pass eventId as a prop when this page is loaded

class App extends Component {
  render() {
    
    return (
    	<div className="App">
    		<ThisJumbotron />
           <EventDetails  />

          
      </div>
      )

  }
}

export default App;