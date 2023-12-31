import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/pages/404.jsx";
//import { useAuth } from './hooks/useAuth';
import { routes } from "./dataRoutes.js";

const App = () => {
  // const {isAuth} = useAuth();

  return (
    <BrowserRouter basename="/kanban-board">
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              element={<route.component />}
              exact={route.exact}
              key={`route ${route.path}`}
            />
          );
        })}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
