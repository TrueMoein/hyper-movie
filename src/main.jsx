import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import UserProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
