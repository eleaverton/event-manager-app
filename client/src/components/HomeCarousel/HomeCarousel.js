import React from 'react';
import Carousel from "../../../node_modules/react-bootstrap/lib/Carousel";
import CarouselItem from "../../../node_modules/react-bootstrap/lib/CarouselItem";
import CarouselCaption from "../../../node_modules/react-bootstrap/lib/CarouselCaption";
import "./HomeCarousel.css";
import Image from "../../../node_modules/react-bootstrap/lib/Image";


const HomeCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <a><Image className="Image" src="/images/event.jpg" /></a>
      
    </Carousel.Item>
    <Carousel.Item>
      <a><Image className="Image" src="/images/event.jpg" /></a>
      
    </Carousel.Item>

    <Carousel.Item>
      <a><Image className="Image" src="/images/event.jpg" /></a>
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;