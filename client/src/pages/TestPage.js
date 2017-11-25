import React, { Component } from "react";
import "../App.css";
import HomeCarousel from "../components/HomeCarousel";
import EventBox from "../components/EventBox";
import ThisJumbotron from "../components/ThisJumbotron";
import Footer from "../components/Footer";
import {SignUpForm, CreateEventForm} from "../components/Form";
import Row from '../../node_modules/react-bootstrap/lib/Row';
import Col from '../../node_modules/react-bootstrap/lib/Col';
import Button from '../../node_modules/react-bootstrap/lib/Button';
import Grid from '../../node_modules/react-bootstrap/lib/Grid';
import Hover from "../components/Hover";
import Hover1 from "../components/Hover1";
import ButtonToolbar from '../../node_modules/react-bootstrap/lib/ButtonToolbar';
import {CommentDisplay} from "../components/Comments";






class App extends Component {
  render() {
    return (
      <div className="App">
       <ThisJumbotron />
        
        <Grid>
        <br></br>
        <br></br>
          <Row>
            <Col md={12}>
            <table>
                <tr> 
                  <td>
                    <Hover />
                  </td>
                  <td>
                    <Hover1 />
                  </td>
                  <td>
                    <Hover />
                  </td>
                  <td>
                    <Hover1 />
                  </td>
                </tr>
              </table>
                  
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <SignUpForm />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <CreateEventForm />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <CommentDisplay />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              
              <Footer />
            </Col>
          </Row>
        </Grid>
      </div>     

    );
  }
}

export default App;
