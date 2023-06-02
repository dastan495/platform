import React from "react";
import MainPage from "../Pages/MainPage";
import RegistrPage from "../Pages/RegistrPage";
import TablePage from "../Pages/TablePage";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const MAIN_ROUTES = [
    { link: "/", Element: <MainPage />, id: 1 },
    { link: "/Registr", Element: <RegistrPage />, id: 2 },
    { link: "/table", Element: <TablePage />, id: 3 },
  ];
  return (
    <>
      <Routes>
        {MAIN_ROUTES.map((item) => (
          <Route
            path={item.link}
            element={item.Element}
            id={item.id}
            key={item.id}
          />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
