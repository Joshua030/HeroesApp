import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { Navbar } from "../ui";
import { Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route path='/*' element ={
          <PrivateRouter>
<HeroesRoutes />
          </PrivateRouter>
        } />
      </Routes>
    </>
  );
};
