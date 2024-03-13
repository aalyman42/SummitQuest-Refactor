import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "../app/index.jsx";
import Peak from "../app/Peak.jsx";
import Profile from "../app/Profile.jsx";
import Journal from "../app/Journal.jsx";
import Login from "../app/Login.jsx";
import Error from "../app/Error.jsx";
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/peak/:peakId",
        element: <Peak />,
      },
      {
        path: "/profile/:userId",
        element: <Profile />,
      },
      {
        path: "/journal/:userId/:journalId",
        element: <Journal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
