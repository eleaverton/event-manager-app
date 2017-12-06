import React, {Component} from 'react';  
import {CommentForm} from "./CommentForm";
import {CommentList} from "./CommentList";
import {CommentSingle} from "./CommentSingle";
import API from "../../utils/API";
import axios from "axios";
import {TextArea} from '../Form/TextArea'; 
import "../Form/Form.css"; 
import Auth from "../../modules/Auth";
import {DelButton} from "./DelButton";

//props with event id
export class CommentDisplay extends Component {
	constructor(props){
		super(props);
		this.state={
			comments:[],
			comment:''
		};
		this.loadComments=this.loadComments.bind(this);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    	this.handleClearForm = this.handleClearForm.bind(this);
	};
	componentDidMount(){
		this.loadComments(this.props.eventId);
	}

	loadComments = (eventId) => {
		API.getComments(eventId)
			.then(res => this.setState({comments:res.data}))
			.catch(err => console.log(err));
		
	};


	handleInputChange(event){
    	const { name, value } = event.target;
	    this.setState({
	      [name]: value
	    });
  	};
  	handleFormSubmit(event) {
	    event.preventDefault();
	    console.log(this.props);
  		const authToken = Auth.getToken();
    	const headers = { Authorization: authToken}

	    const formPayload = {
	    	//user: however we get the user id from authentication
	      	comment:this.state.comment,
	      	eventId:this.props.eventId 	
	    };
	    //create post request with right data path
	    console.log('Send this in a POST request:', formPayload)
	    axios
	    	.post("/api/events/"+this.props.eventId+"/comments",formPayload,{headers:headers})
	    	.then(response => {
	    		console.log(response);
	    		this.loadComments(this.props.eventId);

	    	})
	    	.catch(err => console.log(err));
	    this.handleClearForm(event);


	};
	handleClearForm(event) {
	    event.preventDefault();
	    this.setState({
	      	comment:''
	
	    });
	};



	render(){
		console.log(this.state.comments);
		console.log(this.props.organizer);

		const delButton = this.props.organizer;
		console.log(delButton);

		// const delButton = null;
		// if(this.props.organizer == true){
		// 	delButton= <button type="button" onClick={this.deleteComment} className="btn btn-danger">Delete</button>
		// }
		return (
			<div className="container">
				<div className="panel panel-default">
					<div className="panel-header">
						Comments
					</div>
					<div className="panel-body">
						{this.state.comments.length ? (
							<CommentList>
								{this.state.comments.map(comment => (
									<CommentSingle key={comment._id}>
										<div>
											{comment.description}

										</div>
										<p>{comment.user.name}</p>
										<div> {delButton ? (<DelButton eventId = {this.props.eventId} commId = {comment._id} loadComments = {this.loadComments}/>):(<p> </p>)} </div>
									</CommentSingle>
								))}
							</CommentList>
							) : (
								<h5> No comments yet - Be the first to add! </h5>
							)}
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

					</div>
				</div>
			</div>
		)
	}
}

