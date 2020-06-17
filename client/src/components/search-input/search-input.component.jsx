import React, { useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.input`
  width: ${(props) => props.widthPercentage}%;
  border: 1px solid lightgray;
  font-size: 1.4rem;
  padding: 5px 15px;
`;

const SearchInput = ({ type, widthPercentage, placeHolder, onClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SearchContainer>
      <TextInput
        widthPercentage={widthPercentage}
        placeholder={placeHolder}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <CustomButton type={type} fontSize={1.4} onClick={onClick}>
        Search
      </CustomButton>
    </SearchContainer>
  );
};

export default SearchInput;
