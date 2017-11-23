import React from 'react';
import Button from '../../../node_modules/react-bootstrap/lib/Button';
import Grid from '../../../node_modules/react-bootstrap/lib/Grid';
import Jumbotron from "../../../node_modules/react-bootstrap/lib/Jumbotron";
import Row from '../../../node_modules/react-bootstrap/lib/Row';
import Col from '../../../node_modules/react-bootstrap/lib/Col';
import CountDown from "../CountDown"
import Map1 from "../Map1";
import styles from "./ThisJumbotron.css";
import RecentHashTags from "../RecentHashTags";
import AddHashTagComment from "../AddHashTagComment";





export default class ThisJumbotron extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="abc">
          <Grid>
            <h1>Dandelions in December</h1>
            <div>
            <br></br>
            <br></br>
            <br></br>
             <br></br>
            <br></br>
            <br></br>
            </div>
            
          </Grid>
          <br></br>
          <Row>
          <Col md={4}>
            <CountDown /> 
          </Col>
          </Row>
          
          
        </Jumbotron>

        <Grid>
          <Row>
            <Col md={8}>
              <h2>Join us for Dandelions in December at the Cockrell Butterfly Center!</h2>
              <p>During the holiday season, the rainforest conservatory will be filled with sunshine in the form of hundreds of graceful brightly colored butterflies, including a favorite among visitors, the western tiger swallowtail butterfly.</p>

                <p>Beautiful white flowers will transform the conservatory into a tropical wonderland! You won’t want to miss this unique reminder of spring.</p>

                <p>Dandelions in December is included in your Cockrell Butterfly Center admission ticket.</p>
                <RecentHashTags />
                  <h1>OR</h1>
                  <AddHashTagComment />
                

            </Col>
            <Col md={4}>
              <h2>The Cockrell Butterfly Center is LocAted Inside HMNS at Herman Park
              </h2>
              <p>5555 Hermann Park Dr.</p>
              <p>Houston,Texas 77030</p>
              <p>(713) 639-4629</p>
              <Map1 />
            </Col>
            
          </Row>
        </Grid>
      </div>
    );
  }
}
