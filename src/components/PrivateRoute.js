import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/authSelectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLogin = useSelector(selectIsLogin);
  return (
    <Route {...routeProps}>
      {isLogin ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
