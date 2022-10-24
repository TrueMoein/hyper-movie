import React from "react";

export default function Navigation() {
  return (
    <nav className="flex items-center text-slate-300">
      <div className="flex items-center">
        <h1 className="text-3xl mr-12">
          Hyper<span className="text-rose-500">Movies</span>
          <p className="text-xs text-center text-slate-500 font-light">
            Film Review
          </p>
        </h1>
        <ul className="flex gap-6 text uppercase">
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
      </div>
      <div className="ml-auto uppercase">
        <ul className="flex gap-8">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a
              className="bg-rose-600 hover:bg-rose-500 px-6 py-3 rounded-2xl text-white"
              href="#"
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
