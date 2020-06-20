import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: #212121;
  color: white;
`;

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        myTRAVEL &copy; 2020 - Made with{' '}
        <span role="img" aria-label="heart">
          💖
        </span>{' '}
        and{' '}
        <span role="img" aria-label="coffee">
          ☕
        </span>{' '}
        by Diego Camy
      </p>
    </Footer>
  );
};

export default FooterComponent;
