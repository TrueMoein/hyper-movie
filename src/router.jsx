import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tv",
        element: <h1>This is tv page</h1>,
      },
      {
        path: "/people",
        element: <h1>This is person page</h1>,
      },
    ],
  },
]);
