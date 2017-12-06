import React from "react";
import {Days, Hours, Minutes, Seconds} from 'react-countdowntimer';

class CountDown extends React.Component{
  render() {
    return (
        <div>
                
    			<div className="xyz"><Days deadline={this.props.date}/>Days</div>
    			<div className="xyz"><Hours deadline={this.props.date}/>Hrs</div>
     			
    	
    
    </div>
    )
  }
}
export default CountDown;
