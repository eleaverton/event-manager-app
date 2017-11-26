import React from 'react';
import Button from '../../../node_modules/react-bootstrap/lib/Button';
import Grid from '../../../node_modules/react-bootstrap/lib/Grid';
import Jumbotron from "../../../node_modules/react-bootstrap/lib/Jumbotron";
import Row from '../../../node_modules/react-bootstrap/lib/Row';
import Col from '../../../node_modules/react-bootstrap/lib/Col';
import styles from "./recentHashTags.css";


export default class ThisJumbotron extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={8}>
              <h3>The Latest from Social Media:</h3>
               <div className="hashtag"></div>
            </Col>            
          </Row>
        </Grid>
      </div>
    );
  }
}
