import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./components/Home/Home"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default AppRoutes;
