import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;

  .tile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .tile {
    grid-column: span 2;
    height: 200px;
  }

  .tile:nth-child(1) {
    grid-column: span 4;
  }

  .tile:last-child {
    grid-column: span 4;
  }
`;

const Mosaic = () => {
  return (
    <Grid>
      <div className='tile'>
        <img src='http://via.placeholder.com/800x600/C72B41/800834' alt='' />
      </div>
      <div className='tile'>
        <img src='http://via.placeholder.com/800x600/C72B41/800834' alt='' />
      </div>
      <div className='tile'>
        <img src='http://via.placeholder.com/800x600/C72B41/800834' alt='' />
      </div>
      <div className='tile'>
        <img src='http://via.placeholder.com/800x600/C72B41/800834' alt='' />
      </div>
      <div className='tile'>
        <img src='http://via.placeholder.com/800x600/C72B41/800834' alt='' />
      </div>
      <div className='tile'>
        <img src='http://via.placeholder.com/800x600/C72B41/800834' alt='' />
      </div>
      <div className='tile'>
        <img src='http://via.placeholder.com/800x600/C72B41/800834' alt='' />
      </div>
    </Grid>
  );
};

export default Mosaic;
