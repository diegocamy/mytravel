import React from 'react';
import styled from 'styled-components';

import LandingSearch from '../../components/landing-search/landing-search.component';
import Mosaic from '../../components/mosaic/mosaic.component';
import GridTile from '../../components/tile/tile.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { recommendedCollection } from '../../data/recommended-collection';

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(9, 9, 121);
  background-color: #f7f7f7;
  padding-bottom: 30px;

  h2 {
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 25px;
  }
`;

const HomePage = () => {
  return (
    <Home>
      <LandingSearch />
      <h2>Don't know where to start?</h2>
      <p>Take a look at our recommended collection</p>
      <Mosaic columnNumber={6} widthPercentage={70}>
        {recommendedCollection.map((item, idx) => {
          const { img, title, url, id } = item;
          if (idx === 0 || idx === recommendedCollection.length - 1) {
            return (
              <GridTile
                id={id}
                columnWidth={4}
                imgUrl={img}
                heightInPixels={200}
                text={title}
              />
            );
          } else {
            return (
              <GridTile
                columnWidth={2}
                imgUrl={img}
                heightInPixels={200}
                text={title}
              />
            );
          }
        })}
      </Mosaic>
      <CustomButton type="secondary" fontSize={1.4}>
        View All
      </CustomButton>
    </Home>
  );
};

export default HomePage;
