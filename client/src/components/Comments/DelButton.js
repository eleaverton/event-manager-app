import React, {Component} from 'react'; 
import axios from 'axios';

export class DelButton extends Component {
	constructor(props){
		super(props);

		this.delComment=this.delComment.bind(this);
	}

	delComment(event){
		event.preventDefault();
		console.log(this.props);
		axios
			.delete("/api/events/"+this.props.eventId+"/comments/"+this.props.commId)
			.then(comments => {
				console.log(comments);
				this.props.loadComments(this.props.eventId);
			})
			.catch(err => console.log(err))


	}

	render(){
		return(
			<button type="button" onClick={this.delComment} id={this.props.id} className="btn btn-danger">Delete</button>
			)
	}
}