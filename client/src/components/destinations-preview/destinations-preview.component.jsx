import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

import Mosaic from '../mosaic/mosaic.component';
import GridTile from '../tile/tile.component';

const Preview = styled.div`
  width: 70%;
  margin: 30px auto;

  .destination-name {
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
  }

  .view-all {
    display: flex;
    justify-content: flex-end;

    a {
      text-decoration: none;
      color: black;
    }
  }
`;

const DestinationPreview = ({ destinationName, destinationsArray, match }) => {
  return (
    <Preview>
      <h3 className="destination-name">{destinationName}</h3>
      <Mosaic columnNumber={4} widthPercentage={100}>
        {destinationsArray.slice(0, 4).map(d => (
          <GridTile
            key={d.id}
            columnWidth={1}
            heightInPixels={200}
            text={d.title}
            imgUrl={d.img}
            link={`${match.url}/${d.id}`}
          />
        ))}
      </Mosaic>
      <div className="view-all">
        <Link to={`${match.url}/${destinationName}`}>View all {'>'}</Link>
      </div>
    </Preview>
  );
};

export default withRouter(DestinationPreview);
