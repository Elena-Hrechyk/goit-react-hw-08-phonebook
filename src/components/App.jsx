import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Home from 'pages/Home';
import UserReg from 'pages/UserReg';
import UserLogin from 'pages/UserLogin';
import NotFound from 'pages/NotFound';
import Contacts from 'pages/Contacts';
import { fetchCurrentUser } from 'redux/auth/operations-auth';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registration" element={<UserReg />}></Route>
        <Route path="/login" element={<UserLogin />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
