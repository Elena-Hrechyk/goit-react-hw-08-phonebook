import { BoxAuth, NavLinkAuth } from './UserAuthLog.styled';

const UserAuthLog = () => {
  return (
    <BoxAuth>
      <NavLinkAuth to="/registration">Registration</NavLinkAuth>
      <NavLinkAuth to="/login">Login</NavLinkAuth>
    </BoxAuth>
  );
};

export default UserAuthLog;
