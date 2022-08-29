import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../pages/Users';
import Posts from '../pages/Posts';
import Main from '../pages/Main';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='users' element={<Users/>}/>
      <Route path='posts' element={<Posts/>}/>
      <Route path='*' element={<Main/>}/>
    </Routes>
  );
};

export default AppRoutes;