import React from 'react';
import Carousel from "../../../node_modules/react-bootstrap/lib/Carousel";
import CarouselItem from "../../../node_modules/react-bootstrap/lib/CarouselItem";
import CarouselCaption from "../../../node_modules/react-bootstrap/lib/CarouselCaption";
import "./HomeCarousel.css";
// import Nav1 from "../Nav1";

const HomeCarousel = () => (

  <Carousel>
    <Carousel.Item>
      <Carousel.Caption />
      <img className="party" alt="" src="" />
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="img-responsive"
        alt=""
        src="/images/carnival1.jpg"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img width={900} height={500} alt="" src="/images/pool1.jpg" />
      <Carousel.Caption />
    </Carousel.Item>
  </Carousel>
  
);

export default HomeCarousel;
