import React from "react";
import CountDown from "./CountDown"

const Header = () => (
  <div>
  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Button Link</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#">Home</a></li>
  <li role="presentation"><a href="#">Saved Articles</a></li>
  <li><button type="button" class="btn btn-danger navbar-btn">Another Button</button></li>
</ul>

        </div>
      </div>
    </nav>

    
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
export default Header;