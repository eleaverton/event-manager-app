import React, {Component} from 'react'; 
import {TextArea} from '../Form/TextArea'; 
import "../Form/Form.css"; 

export class CommentForm extends Component {
	constructor(props){
		super(props);
		this.state={
			comment:''
		};
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    	this.handleClearForm = this.handleClearForm.bind(this);
	}

	handleInputChange(event){
    	const { name, value } = event.target;
	    this.setState({
	      [name]: value
	    });
  	};
  	handleFormSubmit(event) {
	    event.preventDefault();

	    const formPayload = {
	    	//user: however we get the user id from authentication
	      	comment:this.state.comment,
	      	//event: need to store this info as a prop coming in

	      	
	    };
	    //create post request with right data path
	    console.log('Send this in a POST request:', formPayload)
	    this.handleClearForm(event);
	};
	handleClearForm(event) {
	    event.preventDefault();
	    this.setState({
	      	comment:''
	
	    });
	};

	render(){
		return(
			<form onSubmit={this.handleFormSubmit}>
				<TextArea
			        title={'Comment'}
			        rows={4}
			        resize={false}
			        content={this.state.comment}
			        name={'comment'}
			        controlFunc={this.handleInputChange} />
			    <input
			        type="submit"
			        className="btn btn-primary float-right"
			        value="Submit"/>  
			</form>
		)
	}
}