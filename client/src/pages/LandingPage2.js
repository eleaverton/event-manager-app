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
import Nav from "../../../node_modules/react-bootstrap/lib/Nav";
import NavItem from "../../../node_modules/react-bootstrap/lib/NavItem";
import {SignUpForm, LoginForm} from  "../components/Form";
import Modal from '../../../node_modules/react-bootstrap/lib/Modal';
import {OrganizerTableAll} from "../components/OrganizerTableAll";
import {ChartDiv} from "../components/Chart";

//eventBoxes will render based on a get API call
//need to use map to render the boxes

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state={
      events:[],
      render:'',
      orgView: false,
      signInShow:false,
      loginShow:false,
      eventShow:false,
    };
    this.loadEvents=this.loadEvents.bind(this);
    this.loadRegistered=this.loadRegistered.bind(this);
    this.loadCreated=this.loadCreated.bind(this);
    this.signInOpen=this.signInOpen.bind(this);
    this.signInClose=this.signInClose.bind(this);
    this.loginOpen=this.loginOpen.bind(this);
    this.loginClose=this.loginClose.bind(this);
  };
  signInClose() {
    this.setState({signInShow:false});
  }
  signInOpen(){
    this.setState({signInShow:true});
    this.setState({eventShow:false});
  }
  loginClose() {
    this.setState({loginShow:false});
  }
  loginOpen(){
    this.setState({loginShow:true});
    this.setState({eventShow:false});
  }

  componentDidMount(){
    this.loadEvents();
  }

  loadEvents = () => {
    this.setState({ render:true});
    this.state.events=[];
    this.setState({orgView:false});
    API.getAllEvents()
      .then(res => this.setState({events:res.data}))
      .catch(err => console.log(err));

  };

  loadRegistered = () =>{
    console.log("load Registered");
    this.state.events=[];
    this.setState({orgView:false});
    const authToken = Auth.getToken();
    const headers = { Authorization: authToken}
    console.log(Auth.isUserAuthenticated());

    if (Auth.isUserAuthenticated()){
      this.setState({ render:true})
      API.getAllUserEvents(headers)
        .then(res => {
          console.log(res.data);
          this.setState({events:res.data.eventsRegistered})})
        .catch(err => console.log(err));
    }
    else{
      this.setState({render:false});
    }
    console.log(this.state.render);
    console.log(this.state.events.length);
  }
  loadCreated = () =>{
    console.log("load Created");
    this.state.events=[];
    const authToken = Auth.getToken();
    const headers = { Authorization: authToken}
    console.log(authToken);
    console.log(Auth.isUserAuthenticated());
    if (Auth.isUserAuthenticated()){
      
      API.getAllUserEvents(headers)
        .then(res => {
          this.setState({events:res.data.eventsOrganized});
          console.log(this.state.events);
        })
        .catch(err => console.log(err));
      this.setState({ render:true, orgView:true})
    }
    else{
      this.setState({render:false});
    }
    console.log(this.state.render);
    console.log(this.state.events);
  }
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
    const render=this.state.render;
    console.log(render);
    let eventsList = null;
    if (this.state.events.length > 0) {
      eventsList = true;
    } else {
      eventsList = false;
    }
    console.log(this.state.events.length);

    let table=null
    let chartDiv=null
    const orgView=this.state.orgView;
    if (orgView){
      table=<OrganizerTableAll data={this.state.events}/>
      chartDiv=<ChartDiv data={this.state.events} />
      
    }

    return (
    <div className="App">
      <HomeCarousel />
      <SearchBox updateSearch={this.updateEventsBasedOnSearch}/>
      <button type="button" className="btn btn-default" onClick={this.loadEvents}>All Events</button>
      <button type="button" className="btn btn-default" onClick={this.loadRegistered}>Registered Events</button>
      <button type="button" className="btn btn-default" onClick={this.loadCreated}>Created Events</button>
      <br></br>
      <br></br>
      <div>
      {render ? (
      <div className="container">
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-body">
              {eventsList ? (
                <div className="eventList">
                  {this.state.events.map(event => (
                    <EventBox key={event._id} id={event._id} title={event.title} description={event.description}/>
                  ))}
                  {table}
                  {chartDiv}
                </div>
              
              ) : (
                <h5> No events added yet! </h5>
              )}
            </div>
          </div>
        </div>
      </div>
      ):(
      <div className="container">
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-body">
              <p>Sign up or log in to see events</p>
            </div>
          </div>
        </div>
      </div>

      )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )}
}

export default LandingPage;
