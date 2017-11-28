import React, {Component} from 'react';  
import {CommentList} from "../Comments/CommentList";
import {CommentSingle} from "../Comments/CommentSingle";
import "./UserEventsList.css";

export class UserEventsList extends Component{
	constructor(props){
		super(props);
		this.state={
			registeredEvents:[],
			createdEvents:[]
		}
	};


	render(){
		return(
			<div className="col-sm-2" data-spy="affix" data-offset-top="205">
				<div className="panel panel-default">
					<div className="panel-body">
						<CommentList>
							<CommentSingle> Test </CommentSingle>
							<CommentSingle> Test </CommentSingle>
							<CommentSingle> Test </CommentSingle>
							<CommentSingle> Test </CommentSingle>
							<CommentSingle> Test </CommentSingle>
							<CommentSingle> Test </CommentSingle>
						</CommentList>

						<CommentList>
							<CommentSingle> Test </CommentSingle>
							<CommentSingle> Test </CommentSingle>
							<CommentSingle> Test </CommentSingle>
							<CommentSingle> Test </CommentSingle>
							<CommentSingle> Test </CommentSingle>
							<CommentSingle> Test </CommentSingle>
						</CommentList>

					</div>
				</div>
			</div>
			)
	}
}