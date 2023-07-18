import { BoxAuth, NavLinkAuth } from './UserAuthLog.styled';

const UserAuthLog = () => {
  return (
    <BoxAuth>
      <NavLinkAuth exact to="/registration">
        Registration
      </NavLinkAuth>
      <NavLinkAuth exact to="/login">
        Login
      </NavLinkAuth>
    </BoxAuth>
  );
};

export default UserAuthLog;
