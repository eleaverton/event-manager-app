import React, { Component } from "react";
import {storage} from '../../firebase/fire';

const storageRef = storage.ref("eventprofile/");

class EventBox extends Component {
    constructor(props){
    super(props);
    this.state = {
			img:""
		}
  };



  componentWillMount(){
		 storageRef.child(this.props.id+"/img_fjords.jpg").getDownloadURL().then((url) => {
			this.setState({img:url});
		 });
	}


  render(){
    console.log(this.props);
    return(

        <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src= {this.state.img} alt="..." />
                <div className="caption">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <p><a href={'api/events/'+ this.props.id} className="btn btn-primary" role="button">Button</a> </p>

                </div>
            </div>
        </div>
    )
  }

}



export default EventBox;
