import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations-auth';
import userAvatar from '../../img/userAvatar.svg';
import { selectUsername } from 'redux/auth/authSelectors';
import { BoxUserMenu, TextUserMenu, BtnLogout } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  return (
    <BoxUserMenu>
      <img src={userAvatar} alt="User's avatar" width="32" />
      <TextUserMenu>Welcome, {name}!</TextUserMenu>
      <BtnLogout type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BtnLogout>
    </BoxUserMenu>
  );
};
export default UserMenu;
