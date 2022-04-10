import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from './pages/Posts';
import Profile from './pages/Profile';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} >
          <Route index element={<Posts />} />
          <Route path='user-profile'  element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;