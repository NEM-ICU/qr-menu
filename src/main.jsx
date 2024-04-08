import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Layout from "./Layout.jsx";
import Profile from "./pages/Profile.jsx";
import Menu from "./pages/Menu.jsx";
import EditMenu from "./pages/EditMenu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout children={<Home />} />,
      },
      {
        path: "profile",
        element: <Layout children={<Profile />} />,
      },
      {
        path: "menu",
        element: <Layout children={<Menu />} />,
      },
      {
        path: "edit-menu",
        element: <Layout children={<EditMenu />} />,
      },
      {
        path: "*",
        element: <Layout children={<div>404</div>} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
