import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import MainPage from '../pages/mainpage/MainPage';

function MainRoute(props) {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoute;
