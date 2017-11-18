import React from "react";
import CountDown from "../CountDown"

const Jumbotron = () => (
<div>
    
    <div class="jumbotron">
      <div class="container">
       <div class="row">
        <div class="col-md-12">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>         
      </div>
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
        <p></p>
          <CountDown />
        </div>
      </div>
    </div>               
  </div>
</div>
    
);
export default Jumbotron;