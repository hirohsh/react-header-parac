import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Navigation from './Navigation';
import ToggleButton from './ToggleButton';
import NavigationResponsive from './NavigationResponsive';
import Logo from './picture/logo.svg';

const MinimumHeader1 = ({ menuItems }) => {
  const [isClickedMenuButton, setIsClickedMenuButton] = useState(false);

  const menuClickHandler = () => {
    setIsClickedMenuButton((pre) => !pre);
  };
  return (
    <>
      <StyledHeader isClickedMenuButton={isClickedMenuButton}>
        <ALogoWrapper href="#">
          <img src={Logo} alt="logo" />
        </ALogoWrapper>
        <Navigation menuItems={menuItems} />
        <ToggleButton menuClickHandler={menuClickHandler} />
      </StyledHeader>
      <NavigationResponsive
        isClickedMenuButton={isClickedMenuButton}
        menuClickHandler={menuClickHandler}
        menuItems={menuItems}
      />
    </>
  );
};

const StyledHeader = styled.header`
  ${(props) =>
    props.isClickedMenuButton
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: transparent;

  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 80px;
    z-index: -1;
    transition: transform 0.3s, opacity 0.4s;
    transform: translateY(-100%);
    opacity: 0;
  }
  &:hover::before {
    transform: translateY(0);
    opacity: 1;
  }
  @media (max-width: 960px) {
    padding: 0;
  }
`;

const ALogoWrapper = styled.a`
  & img {
    width: 60px;
  }
  @media (max-width: 960px) {
    flex-grow: 1;
    text-align: center;
    & img {
      transform: translateX(70%);
    }
  }
`;

export default MinimumHeader1;
