import React, {Component} from 'react';  
import {CommentForm} from "./CommentForm"
import "../Form/Form.css";

//props with event id
class CommentDisplay extends Component {
	state={
		comments:[]
	};

	componentDidMount(eventId){
		this.loadComments(eventId);
	}

	loadComments()
}