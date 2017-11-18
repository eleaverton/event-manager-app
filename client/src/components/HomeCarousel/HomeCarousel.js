import React from "react";
import Bootstrap from "react-bootstrap";

const HomeCarousel = () => (
  <div>


  <div id="myCarousel" className="carousel slide" data-ride="carousel">
     
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img className="first-slide" src="" alt="First slide" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Example headline.</h1>
              <p>Note: If you're viewing this page via a file URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
             
            </div>
          </div>
        </div>
        <div className="item">
          <img className="second-slide" src="" alt="Second slide" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              
            </div>
          </div>
        </div>
        <div className="item">
          <img className="third-slide" src="" alt="Third slide" />
          <div className="container">
            <div className="carousel-caption">
              <h1>One more for good measure.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. </p>
             
            </div>
          </div>
        </div>
      </div>
      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
      <div className="container">
      <div className="row">
        <div id="statBox" class="col-md-6 col-md-offset-3">
          <h1>HELLO HELLO</h1>
        </div>
      </div>
    </div>

 
 </div>
    
);
export default HomeCarousel;