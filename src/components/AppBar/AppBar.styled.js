import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid darkgray;
`;



export const NavMenu = styled.nav`
  min-height: 32px;
  display: flex;
  align-items: center;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  margin-right: 16px;
  transition: color 250ms linear;
  color: black;
  &.active {
    color: #4468df;
    border-bottom: 2px solid #4468df;
  }
  &:hover,
  &:focus {
    color: #4468df;
  }
`;
