import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid;
  border-color: black;
  margin: 0;
  padding: 5px 15px;
  color: black;
  background: white;
  font-size: ${(props) => props.fontSize}rem;

  &.primary {
    background: #40dbaa;
    border-color: #40dbaa;
    &:hover {
      background: #2c8569;
      border-color: #2c8569;
      color: white;
    }
  }

  &.secondary {
    background: #1a93d9;
    border-color: #1a93d9;
    color: white;
    &:hover {
      background: #266a91;
      border-color: #266a91;
    }
  }

  &.danger {
    background: #d91a1a;
    border-color: #d91a1a;
    color: white;

    &:hover {
      background: #992626;
      border-color: #992626;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const CustomButton = ({ type, fontSize, children }) => {
  return (
    <Button fontSize={fontSize} className={type}>
      {children}
    </Button>
  );
};

export default CustomButton;
