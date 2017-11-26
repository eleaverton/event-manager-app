import React from 'react';
import Carousel from "../../../node_modules/react-bootstrap/lib/Carousel";
import CarouselItem from "../../../node_modules/react-bootstrap/lib/CarouselItem";
import CarouselCaption from "../../../node_modules/react-bootstrap/lib/CarouselCaption";
import "./HomeCarousel.css";
// import Nav1 from "../Nav1";

const HomeCarousel = () => (
  <Carousel>
    <Carousel.Item>
     <Carousel.Caption>
        
       
      </Carousel.Caption>
      <img width={900} height={500} alt="" src="https://static.pexels.com/photos/433452/pexels-photo-433452.jpeg" />
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="" src="/assets/carousel.png" />
      <Carousel.Caption>
        
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="" src="/assets/carousel.png" />
      <Carousel.Caption>
                
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;
