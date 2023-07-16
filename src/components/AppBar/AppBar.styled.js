import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid darkgray;
`;

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  margin-right: 16px;
  transition: color 250ms linear;
  &.active {
    color: #4468df;
  }
  &:hover,
  &:focus {
    color: #4468df;
  }
`;
