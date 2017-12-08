import React, { Component } from "react";
import {Chart} from './Chart';

export class ChartDiv extends Component {
	constructor (props){
		super(props);
		this.state={
			chartData:[{
				chartTitle:'Test',
				labels:["cats", "dogs"],
				datasets:[{
					label:'',
					data:[5,2,0]
				}]
			}]
			// chartData:{
			// 	labels:[],
			// 	datasets:[{
			// 		label:'',
			// 		data:[]
			// 	}],
				// backgroundColor:[]
			}
		
		this.makeChartDataArray=this.makeChartDataArray.bind(this);
		}
		
	
	componentDidMount(){
		this.makeChartDataArray(this.props.data);
	}

	makeChartDataArray(organizedEventData) {
		let eventSfData = []
		organizedEventData.forEach((element) => {
			
			console.log(element);
			element.specificFields.forEach((sf) => {

				let eventSfDataObj = {}
	// 			//chart title = "element + sf.fieldName"
				eventSfDataObj.chartTitle = element.title + " - "+sf.fieldName;
				console.log(eventSfDataObj.chartTitle);
	// 			//list of responses
				var responsesAll = [];
				var responsesSlim=[];
				sf.responses.forEach((response) => {
					
					responsesAll.push(response.response.toLowerCase());
					responsesSlim=responsesAll.filter( function( item, index, inputArray ) {
				        return inputArray.indexOf(item) == index;
				    });

				})
				console.log(responsesSlim);
				eventSfDataObj.labels=responsesSlim;
				
				//count of each
				var responseCount = [];
				for (var i=0; i<responsesSlim.length;i++){
					var count = 0;
					for (var j=0; j<responsesAll.length; j++){
						if (responsesAll[j]==responsesSlim[i]){
							count ++;
						}
					}
				console.log(count)
				responseCount.push(count);
				}
				console.log(responseCount);


				eventSfDataObj.datasets=[];


				var dataitem={
					label:'',
					data:responseCount
				};

				eventSfDataObj.datasets.push(dataitem);
				console.log(eventSfDataObj);
				
	// 			

	// 			
					

				
				eventSfData.push(eventSfDataObj);
				console.log(eventSfData);
				this.setState({chartData:eventSfData})
				
			})//close sf for each - should have a full object pushed to arry by this point
			
			

		})//closes element for each
		

		}//closes function
		
		


	render(){
		return(
			<div className="chartDiv">
				
				<Chart chartData={this.state.chartData} />
			</div>
		
		)
	}
}
