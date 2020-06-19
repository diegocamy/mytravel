import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationBar = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid lightgray;

  .container {
    width: 90%;
    display: flex;
    justify-content: space-between;

    .logo {
      font-weight: bold;
      padding: 10px 20px;
      font-size: 22px;
      text-decoration: none;

      .leftSide {
        color: #40dbaa;
      }
      .rightSide {
        color: #1a93d9;
        font-weight: normal;
      }
    }
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    color: black;
    padding: 15px 10px;
    text-decoration: none;
  }

  .active {
    background-color: #40dbaa;
    color: white;
  }
`;

const NavBar = () => {
  return (
    <NavigationBar>
      <div className="container">
        <Link to="/" className="logo">
          <span className="leftSide">my</span>
          <span className="rightSide">TRAVEL</span>
        </Link>
        <Links>
          <Link to="/">HOME</Link>
          <Link to="/destinations">DESTINATIONS</Link>
          <Link to="/about-us">ABOUT US</Link>
        </Links>
      </div>
    </NavigationBar>
  );
};

export default NavBar;
