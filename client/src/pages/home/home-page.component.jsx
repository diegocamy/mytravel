import React from 'react';
import LandingSearch from '../../components/landing-search/landing-search.component';
import Mosaic from '../../components/mosaic/mosaic.component';
import GridTile from '../../components/tile/tile.component';

const images = [
  'http://via.placeholder.com/800x600/C72B41/800834',
  'http://via.placeholder.com/800x600/C72B41/800834',
  'http://via.placeholder.com/800x600/C72B41/800834',
  'http://via.placeholder.com/800x600/C72B41/800834',
  'http://via.placeholder.com/800x600/C72B41/800834',
  'http://via.placeholder.com/800x600/C72B41/800834',
  'http://via.placeholder.com/800x600/C72B41/800834',
];

const HomePage = () => {
  return (
    <div>
      <LandingSearch />
      <Mosaic columnNumber={6} widthPercentage={70}>
        {images.map((img, idx) => {
          if (idx === 0 || idx === images.length - 1) {
            return (
              <GridTile
                columnWidth={4}
                imgUrl={img}
                heightInPixels={200}
                text={'lala'}
              />
            );
          } else {
            return (
              <GridTile columnWidth={2} imgUrl={img} heightInPixels={200} />
            );
          }
        })}
      </Mosaic>
    </div>
  );
};

export default HomePage;
