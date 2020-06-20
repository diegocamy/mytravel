import React from 'react';
import styled from 'styled-components';

import SearchInput from '../search-input/search-input.component';

import manMountain from '../../assets/carousel-background/man-mountain.jpg';

const Container = styled.div`
  height: 450px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  div:last-child {
    margin: 0 auto;
    position: absolute;
    top: 86%;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  height: 90%;
  background: url(${manMountain}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-top: 65px;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    z-index: 1;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 90%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const LandingSearch = () => {
  return (
    <Container>
      <ImageContainer>
        <DarkOverlay />
        <h2>Your next big adventure begins here</h2>
      </ImageContainer>
      <SearchInput
        className="carrasco"
        widthPercentage={50}
        placeHolder="Enter a destination"
        type="secondary"
      />
    </Container>
  );
};

export default LandingSearch;
