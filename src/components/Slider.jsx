import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../banners/1.png'
import slide2 from '../banners/2.png'
import slide3 from '../banners/3.png'
import 'bootstrap/dist/css/bootstrap.min.css';


function SliderInterval() {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 >Второй слайд</h3>
          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Третий слайд</h3>
          {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderInterval;