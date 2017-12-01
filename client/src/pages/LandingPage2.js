import React, { Component } from "react";
import axios from "axios";
import Bootstrap from "react-bootstrap";
import EventBox from "../components/EventBox";
import Nav1 from "../components/Nav1";
import {UserEventsList} from "../components/UserEventsList";
import HomeCarousel from "../components/HomeCarousel";
import Footer from "../components/Footer";
import API from "../utils/API";
import {SearchBox} from "../components/SearchBox";
import Auth from "../modules/Auth";


//eventBoxes will render based on a get API call
//need to use map to render the boxes

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state={
      events:[]
    };
  };

  componentDidMount(){
    this.loadEvents();
  }

  loadEvents = () => {
    //if allEvents Button is selected
    API.getAllEvents()
      .then(res => this.setState({events:res.data}))
      .catch(err => console.log(err));

  };

  loadRegistered = () =>{
  //need to set up auth so that we can get id
    const authToken = Auth.getToken();
    const headers = { Authorization: authToken}
    API.getUser(headers)
      .then(res => this.setState({events:res.data}))
  }
  loadCreated = () =>{
    //if Created Button is selected
    const authToken = Auth.getToken();
    const headers = { Authorization: authToken}
    API.getUser(headers)
  }
  updateEventsBasedOnSearch = (events)=> {
    console.log("events: ", events);
     this.setState({events:events})
  }

  render() {

    return <div className="App">
           <HomeCarousel />
           <SearchBox updateSearch={this.updateEventsBasedOnSearch}/>
           <button type="button" className="btn btn-default">All Events</button>
           <button type="button" className="btn btn-default">Registered Events</button>
           <button type="button" className="btn btn-default">Created Events</button>
           <br></br>
           <br></br>
        <div className="container">
          <div className="row">
          <div className="panel panel-default">
            <div className="panel-body">
              {this.state.events.length ? (
                <div className="eventList">
                  {this.state.events.map(event => (
                    <EventBox key={event._id} id={event._id} title={event.title} description={event.description}/>

                  ))}
                </div>
              ) : (
                <h5> No events yet - Be the first to add! </h5>
              )}
            </div>
          </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
  }
}

export default LandingPage;
