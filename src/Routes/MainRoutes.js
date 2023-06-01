import React from "react";
import MainPage from "../Pages/MainPage";
import RegistrPage from "../Pages/RegistrPage";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const MAIN_ROUTES = [
    { link: "/", Elemenet: <MainPage />, id: 1 },
    { link: "Registr", Elemenet: <RegistrPage />, id: 2 },
  ];
  return (
    <>
      <Routes>
        {MAIN_ROUTES.map((item) => (
          <Route
            path={item.link}
            element={item.Elemenet}
            id={item.id}
            key={item.id}
          />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
