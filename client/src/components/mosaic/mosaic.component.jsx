import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  width: ${props => props.widthPercentage}%;
  margin: auto;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(${props => props.columnNumber}, 1fr);
  grid-gap: 1rem;
`;

const Mosaic = ({ columnNumber, widthPercentage, children }) => {
  return (
    <Grid widthPercentage={widthPercentage} columnNumber={columnNumber}>
      {children}
    </Grid>
  );
};

export default Mosaic;
