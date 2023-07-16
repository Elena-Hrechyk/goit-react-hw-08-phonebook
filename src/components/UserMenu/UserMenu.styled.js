import styled from '@emotion/styled';

export const BoxUserMenu = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  margin-left: auto;
`;

export const TextUserMenu = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const BtnLogout = styled.button`
  display: block;
  margin-left: auto;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  border: 1px solid rgba(161, 165, 161, 0.397);
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus {
    color: aliceblue;
    background-color: #4468df;
  }
`;
