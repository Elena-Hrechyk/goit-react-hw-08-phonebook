import React from 'react';
import { useSelector } from 'react-redux';
import UserAuthLog from 'components/UserAuthLog/UserAuthLog';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLogin, selectIsUpdating } from 'redux/auth/authSelectors';
import { Header, NavMenu, NavLinks } from './AppBar.styled';
import { Container } from 'components/App.styled';

const AppBar = () => {
  const isLogin = useSelector(selectIsLogin);
  const isUpdating = useSelector(selectIsUpdating);
  return (
    <Header>
      <Container>
        <NavMenu>
          <NavLinks exact to="/">
            Home
          </NavLinks>
          {isLogin && (
            <NavLinks exact to="/contacts">
              Contacts
            </NavLinks>
          )}
          {isLogin && !isUpdating ? <UserMenu /> : <UserAuthLog />}
        </NavMenu>
      </Container>
    </Header>
  );
};

export default AppBar;
