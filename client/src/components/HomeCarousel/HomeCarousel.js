import React from 'react';
import Carousel from "../../../node_modules/react-bootstrap/lib/Carousel";
import CarouselItem from "../../../node_modules/react-bootstrap/lib/CarouselItem";
import CarouselCaption from "../../../node_modules/react-bootstrap/lib/CarouselCaption";
import "./HomeCarousel.css";

const HomeCarousel = () => (

  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://static.pexels.com/photos/433452/pexels-photo-433452.jpeg" />
      <Carousel.Caption>
        <h4>First slide label</h4>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
      <Carousel.Caption>
        <h4>Second slide label</h4>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
      <Carousel.Caption>
        <h4>Third slide label</h4>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;
