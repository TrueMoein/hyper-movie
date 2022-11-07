import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Movie from "./components/pages/Movie";
import Movies from "./components/pages/Movies";
import Profile from "./components/pages/Profile";
import UserProvider from "./context/UserContext";

export const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
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
        path: "/movies/:id",
        element: <Movie />,
      },
      {
        path: "/tv",
        element: <h1>This is tv page</h1>,
      },
      {
        path: "/people",
        element: <h1>This is person page</h1>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
