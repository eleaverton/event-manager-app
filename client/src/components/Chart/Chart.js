import React, { Component } from "react";
import {Bar, Column} from 'react-chartjs-2';

export class Chart extends Component {
	constructor (props){
		super(props);
		
	}


	render(){
		console.log(this.props.chartData);
		return(
		<div className="chart">
		{this.props.chartData.map(chart => (
			<Bar
				data={chart}
				width={100}
				height={50}
				options={{
					
					scales: {
					    yAxes: [{
					        display: true,
					        ticks: {
					            
					            beginAtZero: true   // minimum value will be 0.
					        }
					    }]
					}
				
				}}
			/>

			))}
		
		</div>
		)
	}
}