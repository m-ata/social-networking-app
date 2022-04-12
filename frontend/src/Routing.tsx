import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";

export const LoaderContext = React.createContext([]);

const AppRouter = () => {
  const [isLoading, setIsloading] = React.useState(false);

  return (
    <LoaderContext.Provider value={[isLoading, setIsloading]}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"}>
            <Route index element={<Posts />} />
            <Route path="user-profile/:id" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderContext.Provider>
  );
};

export default AppRouter;
