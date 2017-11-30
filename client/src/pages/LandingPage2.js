import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import EventBox from "../components/EventBox";
import Nav1 from "../components/Nav1";
import {UserEventsList} from "../components/UserEventsList";
import HomeCarousel from "../components/HomeCarousel";
import Footer from "../components/Footer";
import API from "../utils/API";
import {SearchBox} from "../components/SearchBox";


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
    API.getAllEvents()
      .then(res => this.setState({events:res.data}))
      .catch(err => console.log(err));
  };

  updateEventsBasedOnSearch = (events)=> {
    console.log("events: ", events);
     this.setState({events:events})
  }

  // addEvent = (events)=> {
  //   console.log("events: ", events);
  //   const temp = {... this.state.event, events};
  //    this.setState({events:temp})
  // }


  render() {

    return <div className="App">
           <HomeCarousel />
           <SearchBox updateSearch={this.updateEventsBasedOnSearch}/>
        <div className="container-fluid">
          <div className="row">
          <UserEventsList />
          <div className="panel panel-default col-sm-9">
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
