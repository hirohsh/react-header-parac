import React from 'react';
import styled, { css } from 'styled-components';
import Search from './picture/search.png';

const NavigationResponsive = ({ isClickedMenuButton, menuClickHandler, menuItems }) => {
  return (
    <DivWrapper isClickedMenuButton={isClickedMenuButton}>
      <DivClickArea onClick={menuClickHandler}></DivClickArea>
      <DivMenuArea>
        <DivMenuAreaTop>
          <DivSearch>
            <input type="text" placeholder="検索する" />
            <img src={Search} alt="" width="20px" />
          </DivSearch>
          <NavMenu>
            {menuItems
              ? menuItems.map((item) => (
                  <a href={item.link} key={item.name}>
                    {item.name}
                  </a>
                ))
              : ''}
          </NavMenu>
        </DivMenuAreaTop>
        <DivMenuAreaBottom>
          <DivBottomMenu>
            <a href="/">xxx</a>
            <a href="/">xxx/xxx</a>
            <a href="/">xxx&xxxx</a>
            <a href="/">xxx/xxxx</a>
          </DivBottomMenu>
          <DivBottomEtc>
            <a href="/">FAQ</a>
            <a href="/">PRESS</a>
          </DivBottomEtc>
        </DivMenuAreaBottom>
      </DivMenuArea>
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  transition: transform 0.8s, opacity 1s;
  ${(props) =>
    props.isClickedMenuButton
      ? css`
          transform: translateX(0);
          opacity: 1;
        `
      : css`
          transform: translateX(100%);
          opacity: 0;
        `}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  display: flex;
  @media (min-width: 960px) {
    display: none;
  }
`;
const DivClickArea = styled.div`
  width: 20%;
  height: 100%;
  background-color: transparent;
  cursor: pointer;
`;
const DivMenuArea = styled.div`
  width: 80%;
  height: 100%;
`;
const DivMenuAreaTop = styled.div`
  width: 100%;
  height: 35%;
  background-color: #fff;
  padding: 15px;
`;
const DivMenuAreaBottom = styled.div`
  width: 100%;
  height: 65%;
  background-color: #000;
  padding: 15px;
`;
const DivSearch = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #000;
  & input {
    flex-grow: 1;
    border: none;
  }
  & img {
    cursor: pointer;
  }
`;
const NavMenu = styled.nav`
  padding: 50px 0 50px 0;
  & a {
    text-decoration: none;
    display: block;
    font-size: 1.7rem;
    color: #000;
  }
  & a:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const DivBottomMenu = styled.div`
  padding-top: 30px;
  & a {
    display: block;
    border-bottom: 1px solid #ffffff99;
    text-decoration: none;
    color: #ffffff99;
    position: relative;
    padding: 10px 0;
    font-size: 1.2rem;
  }
  & a:not(:first-child)::after {
    content: '➔';
    position: absolute;
    right: 0;
  }
`;
const DivBottomEtc = styled.div`
  padding: 30px 0;
  & a {
    display: block;
    text-decoration: none;
    color: #ffffff99;
    font-size: 1.2rem;
  }
  & a:first-child {
    margin-bottom: 15px;
  }
`;
export default NavigationResponsive;
