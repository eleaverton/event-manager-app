import React, {Component} from 'react';  
import {CommentForm} from "./CommentForm";
import {CommentList} from "./CommentList";
import {CommentSingle} from "./CommentSingle";
import "../Form/Form.css";
import API from "../../utils/API";

//props with event id
export class CommentDisplay extends Component {
	constructor(props){
		super(props);
		this.state={
			comments:[]
		};
	};
	componentDidMount(){
		this.loadComments(this.props.eventId);
	}

	loadComments = (eventId) => {
		API.getComments(eventId)
			.then(res => this.setState({comments:res.data}))
			.catch(err => console.log(err));
	};

	render(){
		return (
			<div className="container">
				<div className="panel panel-default">
					<div className="panel-body">
						{this.state.comments.length ? (
							<CommentList>
								{this.state.comments.map(comment => (
									<CommentSingle key={comment._id}>
										<div>
											{comment.comment}
										</div>
										<p>{comment.user}</p>
									</CommentSingle>
								))}
							</CommentList>
							) : (
								<h5> No comments yet - Be the first to add! </h5>
							)}
						<CommentForm id={this.props._id}/>

					</div>
				</div>
			</div>
		)
	}
}

