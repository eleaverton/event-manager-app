import React, { Component } from "react";

import Table from '../../../node_modules/react-bootstrap/lib/Table';


export class OrganizerTableAll extends Component{
	constructor(props){
		super(props);

	}
	render(){
		console.log(this.props);
		return(
	
			<Table>
				<tr>
				    <th>Event Name</th>
				    <th>Date</th> 
				    <th># Registered</th>
			  	</tr>

			  	{this.props.data.map(event => (
			  		<tr>
			  			<th key={event._id}>{event.title}</th>
			  			<th key={event._id}>{event.dateOfEvent}</th>
			  			<th key={event._id}>{event.attendees.length}</th>

			  		</tr>
		            
		         ))}
			 </Table>

	)}
}