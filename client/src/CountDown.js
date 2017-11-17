import React from "react";
import {Days, Hours, Minutes, Seconds} from 'react-countdowntimer';

class CountDown extends React.Component{
  render() {
    return (
        <div>
                
    			<div className="xyz"><Days deadline="December 27,2017"/>Days</div>
    			<div className="xyz"><Hours deadline="December 27,2017"/>Hrs</div>
     			<div className="xyz"><Minutes deadline="December 27,2017"/>Min</div>  		
    			<div className="xyz"><Seconds deadline="December 27,2017"/>Sec</div>
    	
    
    </div>
    )
  }
}
export default CountDown;
