import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  {
    path: "/movies",
    text: "Movies",
  },
  {
    path: "/tv",
    text: "TV Shows",
  },
  {
    path: "/people",
    text: "People",
  },
  {
    path: "/more",
    text: "More",
  },
];

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function activeClass({ isActive }) {
    return isActive ? "text-yellow-300" : "hover:text-white";
  }

  return (
    <>
      <nav className="flex items-baseline text-slate-300 bg-slate-900 p-4 md:container md:bg-transparent">
        <div className="flex items-baseline">
          <Link to="/">
            <h1 className="text-3xl mr-12 text-white">
              Hyper<span className="text-yellow-500">Movies</span>
              <p className="text-xs text-center text-slate-500 font-light">
                Film Review
              </p>
            </h1>
          </Link>
          <ul className="hidden md:flex text-sm lg:text-base gap-6 uppercase">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={activeClass}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block text-sm lg:text-base ml-auto uppercase">
          <ul className="flex gap-8">
            <li>
              <NavLink to="/login" className="text-white">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-xl text-white"
                to="/signup"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden bg-slate-900 text-center  overflow-hidden transition-all duration-200 text-slate-300 ${
          isOpenMenu ? "py-4 border-t-2 border-slate-700" : "py-0 border-none "
        }`}
        style={{ height: isOpenMenu ? 255 : 0 }}
      >
        <ul className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                className={activeClass}
                to={item.path}
                onClick={() => setIsOpenMenu(false)}
              >
                {item.text.toLocaleUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex gap-4 justify-center items-center border-t-2 pt-4 border-slate-700">
          <NavLink to="/login" className="text-xl text-white">
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-rose-600 rounded-xl py-2 px-4 text-white"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </>
  );
}
