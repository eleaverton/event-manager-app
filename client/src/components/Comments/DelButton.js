import React, {Component} from 'react'; 
import axios from 'axios';

export class DelButton extends Component {
	constructor(props){
		super(props);

		this.delComment=this.delComment.bind(this);
	}

	delComment(event){
		event.preventDefault();

		axios
			.delete("api/events/"+this.props.eventId+"/comments/"+this.props.commId)
			.then(res => {
				console.log(res.data);
				this.props.loadComments();
			})
			.catch(err => console.log(err))


	}

	render(){
		return(
			<button type="button" onClick={this.delComment} id={this.props.id} className="btn btn-danger">Delete</button>
			)
	}
}