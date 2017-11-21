import React from "react";
import Bootstrap from "react-bootstrap";
import "./HomeCarousel.css"

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
          
        </div>
        <div className="item">
          <img className="second-slide" src="" alt="Second slide" />
          
        </div>
        <div className="item">
          <img className="third-slide" src="" alt="Third slide" />
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
        <div id="searchBox" className="well well-lg col-md-6 col-md-offset-3">
          <h2>Search for Your Next Event</h2>
            <form class="form-inline">
                <div class="form-group">
                  <label class="sr-only" for="search">Search Upcoming Events</label>
                  <input type="email" class="form-control" id="search" placeholder="Search Upcoming Events"/>
                </div>
                <div class="form-group">
                  <label class="sr-only" for="exampleInputPassword3">Location</label>
                  <input type="password" class="form-control" id="location" placeholder="Location"/>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
              </form>



        </div>
      </div>
    </div>

 
 </div>
    
);
export default HomeCarousel;