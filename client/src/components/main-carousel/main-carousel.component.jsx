import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import girlWithMap from '../../assets/carousel-background/girl-map.jpg';
import beach from '../../assets/carousel-background/beach.jpg';
import manMountain from '../../assets/carousel-background/man-mountain.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.div`
  height: 550px;
  max-width: 100%;
  .slider {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;

const ImageWithText = styled.div`
  height: 550px;
  position: relative;
  background: url(${(props) => props.img}) no-repeat center / cover;
  color: white;

  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(115, 115, 115, 0) 59%,
      rgba(0, 0, 0, 0.9472163865546218) 100%
    );
  }

  .text {
    position: absolute;
    top: 80%;
    left: 5%;
    margin-bottom: 10px;

    h2 {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

const carouselSettings = {
  autoplay: true,
  arrows: false,
  infinite: true,
  autoplaySpeed: 4000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

const MainCarousel = () => {
  return (
    <SliderContainer>
      <Slider className='slider' {...carouselSettings}>
        <ImageWithText img={girlWithMap}>
          <div className='gradient' />
          <div className='text'>
            <h2>Choose a destination and go!</h2>
            <p>Have fun traveling the world and meeting new places</p>
          </div>
        </ImageWithText>
        <ImageWithText img={manMountain}>
          <div className='gradient' />
          <div className='text'>
            <h2>Find your special adventure today</h2>
            <p>We create unique vacations around the world.</p>
          </div>
        </ImageWithText>
        <ImageWithText img={beach}>
          <div className='gradient' />
          <div className='text'>
            <h2>Don't miss out on our Special Beach Discount</h2>
            <p>Check it out!</p>
          </div>
        </ImageWithText>
      </Slider>
    </SliderContainer>
  );
};

export default MainCarousel;
