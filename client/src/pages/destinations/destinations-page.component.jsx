import React from 'react';
import styled from 'styled-components';
import { destinations } from '../../data/destinations';
import DestinationPreview from '../../components/destinations-preview/destinations-preview.component';

const Destinations = styled.div`
  background: #f7f7f7;
  border-bottom: 1px solid black;

  h2 {
    padding-top: 30px;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    color: #1a93d9;
  }
`;

const DestinationsPage = () => {
  return (
    <Destinations>
      <h2>Destinations</h2>
      {Object.keys(destinations).map(destination => {
        return (
          <DestinationPreview
            key={destination}
            destinationName={destination}
            destinationsArray={Object.values(destinations[destination])}
          />
        );
      })}
    </Destinations>
  );
};

export default DestinationsPage;
