import React from 'react';
import styled from 'styled-components';

const ToggleButton = ({ menuClickHandler }) => {
  return (
    <DivWrapper>
      <DivButtonWrapper onClick={menuClickHandler}>
        <DivBorder />
        <DivBorder />
      </DivButtonWrapper>
    </DivWrapper>
  );
};

const DivBorder = styled.div`
  width: 25px;
  height: 1px;
  background-color: #000;
  &:first-child {
    margin-bottom: 8px;
  }
`;

const DivButtonWrapper = styled.div`
  cursor: pointer;
  padding: 15px;
`;

const DivWrapper = styled.div`
  @media (min-width: 960px) {
    display: none;
  }
`;

export default ToggleButton;
