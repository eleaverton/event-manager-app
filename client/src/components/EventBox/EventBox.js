import React, { Component } from "react";
import {storage} from '../../firebase/fire';
import axios from "axios";
import "./EventBox.css";


const storageRef = storage.ref("eventprofile/");

class EventBox extends Component {
    constructor(props){
    super(props);
    this.state = {
			img:""
		}
  };



  componentWillMount(){
		//  storageRef.child(this.props.id+"/img_fjords.jpg").getDownloadURL().then((url) => {
		// 	this.setState({img:url});
		//  });
    axios.get("/api/events/" + this.props.id).then(res => {
      console.log(res);
      this.setState({img:res.data[0].imageUrl});
    }).catch(err => console.log(err));
	}


  render(){
    console.log(this.props);
    return(

        <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <img className="eventBoxImage" src= {this.state.img} alt="..." />
                <div className="caption">
                    <h3 className="titleOfEvent">{this.props.title}</h3>
                    <div className="box">
                    <p className="demo1">{this.props.description}</p>
                    </div>
                    <p><a href={'events/'+ this.props.id} className="btn btn-primary" role="button">More Info</a> </p>

                </div>
            </div>
        </div>
    )
  }

}



export default EventBox;
