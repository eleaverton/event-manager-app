import React from 'react';
import Button from '../../../node_modules/react-bootstrap/lib/Button';
import Grid from '../../../node_modules/react-bootstrap/lib/Grid';
import Jumbotron from "../../../node_modules/react-bootstrap/lib/Jumbotron";
import Row from '../../../node_modules/react-bootstrap/lib/Row';
import Col from '../../../node_modules/react-bootstrap/lib/Col';
import CountDown from "../CountDown"
import Map1 from "../Map1";
// import Nav1 from "../Nav1";
import "./ThisJumbotron.css";
import RecentHashTags from "../RecentHashTags";
import AddHashTagComment from "../AddHashTagComment";





export default class ThisJumbotron extends React.Component {
  render() {
    return (
      <div>
        <body className="abc">
                     
          <Grid>
            <h1 className="JT">Dandelions in December</h1>            
         <br></br>
         <br></br>
         <br></br>
          <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
          <br></br>
         <br></br>
         <br></br>
          <Row className="countDown">
          <Col className="hidden-xs" sm={7} md={5} lg={5}>
            <CountDown /> 
          </Col>
          </Row>
           </Grid>
          
          
        </body>

      
      </div>
    );
  }
}
