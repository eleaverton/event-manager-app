import React, { Component } from "react";



class EventBox extends Component {
    constructor(props){
    super(props);
  };

  render(){
    return(

        <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src="/images/event.jpg" alt="..." />
                <div className="caption">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> </p>
                </div>
            </div>
        </div>
    )
  }

}



export default EventBox;
