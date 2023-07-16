import React from 'react';
import { useSelector } from 'react-redux';
import UserAuthLog from 'components/UserAuthLog/UserAuthLog';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLogin } from 'redux/auth/authSelectors';
import { Header, Container, NavMenu, NavLinks } from './AppBar.styled';

const AppBar = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <Header>
      <Container>
        <NavMenu>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/contacts">Contacts</NavLinks>
          {isLogin ? <UserMenu /> : <UserAuthLog />}
        </NavMenu>
      </Container>
    </Header>
  );
};

export default AppBar;
