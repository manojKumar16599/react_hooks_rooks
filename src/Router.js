import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import App from "./App";
import NormalHooks from "./Normal_Hooks/NormalHooks";
import RooksConcepts from "./Rooks_Concepts/Rooks";

const RoutePath = () => {
  let routes = useRoutes([
    { path: "/", element: <App /> },
    { path: "/normalHooks", element: <NormalHooks /> },
    { path: "/rooksHooks", element: <RooksConcepts /> },
  ]);
  return routes;
};

const AppRouter = () => {
  return (
    <Router>
      <RoutePath />
    </Router>
  );
};

export default AppRouter;