import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BoxAuth = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  margin-left: auto;
`;

export const NavLinkAuth = styled(NavLink)`
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