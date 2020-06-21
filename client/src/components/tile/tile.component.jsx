import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Tile = styled.div`
  grid-column: span ${props => props.columnWidth};
  height: ${props => props.heightInPixels}px;
  background: url(${props => props.imgUrl});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .darkOverlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0);
  }

  h3 {
    color: white;
    z-index: 3;
    text-transform: uppercase;
    display: none;
  }

  &:hover {
    cursor: pointer;

    .darkOverlay {
      background: rgba(0, 0, 0, 0.6);
    }

    h3 {
      display: flex;
    }
  }
`;

const GridTile = ({ columnWidth, heightInPixels, text, imgUrl, link }) => {
  return (
    <Tile
      columnWidth={columnWidth}
      heightInPixels={heightInPixels}
      imgUrl={imgUrl}>
      <Link to={link}>
        <div className="darkOverlay" />
      </Link>
      <h3>{text}</h3>
    </Tile>
  );
};

export default GridTile;
