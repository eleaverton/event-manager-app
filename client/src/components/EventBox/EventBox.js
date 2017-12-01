import React, { Component } from "react";
import "./EventBox.css";



class EventBox extends Component {
    constructor(props){
    super(props);
  };

  render(){
    console.log(this.props);
    return(

        <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src="/images/event.jpg" alt="..." />
                <div className="caption">
                    <h3>{this.props.title}</h3>
                    <div className="box">
                    <p className="demo1">{this.props.description}</p>
                    </div>
                    <p><a href={'api/events/'+ this.props.id} className="btn btn-primary" role="button">More Info</a> </p>

                </div>
            </div>
        </div>
    )
  }

}



export default EventBox;
