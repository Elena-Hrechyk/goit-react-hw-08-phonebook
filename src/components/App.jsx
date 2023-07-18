import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { fetchCurrentUser } from 'redux/auth/operations-auth';
import AppBar from './AppBar/AppBar';
import { Loader } from './Loader/Loader';
import { selectIsUpdating } from 'redux/auth/authSelectors';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const UserReg = lazy(() => import('pages/UserReg'));
const UserLogin = lazy(() => import('pages/UserLogin'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isUpdatind = useSelector(selectIsUpdating);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isUpdatind && (
        <div>
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute exact path="/">
                <Home />
              </PublicRoute>
              <PublicRoute exact path="/registration" restricted>
                <UserReg />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <UserLogin />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <Contacts />
              </PrivateRoute>
              <Route path="*" element={<NotFound />} />
            </Switch>
          </Suspense>
        </div>
      )}
    </>
  );
};
