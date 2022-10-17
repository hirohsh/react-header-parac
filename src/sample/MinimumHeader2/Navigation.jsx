import React from 'react';
import styled from 'styled-components';
import People from './picture/people.png';
import Place from './picture/place.png';
import Search from './picture/search.png';

const Navigation = ({ menuItems }) => {
  return (
    <StyledNav>
      {menuItems
        ? menuItems.map((item) => {
            return (
              <StyledA href={item.link} key={item.name}>
                {item.name}
              </StyledA>
            );
          })
        : ''}
      <a href="/">
        <img src={Place} alt="" width="20" />
      </a>
      <a href="/">
        <img src={People} alt="" width="20" />
      </a>
      <a href="/">
        <img src={Search} alt="" width="20" />
      </a>
    </StyledNav>
  );
};

const StyledA = styled.a`
  text-decoration: none;
  color: #272626;
  &:hover {
    color: #bebdbd;
  }
`;

const StyledNav = styled.nav`
  & a:not(:last-child) {
    margin-right: 20px;
  }
  display: flex;
  align-items: center;
  @media (max-width: 960px) {
    display: none;
  }
`;

export default Navigation;
