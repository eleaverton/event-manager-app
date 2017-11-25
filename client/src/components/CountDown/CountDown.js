import React from "react";
import {Days, Hours, Minutes, Seconds} from 'react-countdowntimer';

class CountDown extends React.Component{
  render() {
    return (
        <div>
                
    			<div className="xyz"><Days deadline="January 07,2018"/>Days</div>
    			<div className="xyz"><Hours deadline="January 07,2018"/>Hrs</div>
     			<div className="xyz"><Minutes deadline="January 07,2018"/>Min</div>  		
    			<div className="xyz"><Seconds deadline="January 27,2018"/>Sec</div>
    	
    
    </div>
    )
  }
}
export default CountDown;
