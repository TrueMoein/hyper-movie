import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox/SearchBox";

export default function Header() {
  const location = useLocation();
  const [bg, setBg] = useState("/cinema.jpg");

  return (
    <header
      className={`transition-all duration-500 bg-cover bg-center pb-8 md:py-8 ${
        location.pathname !== "/" ? "h-[600px]" : ""
      }`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(30 41 59 / 100%), rgb(30 41 59 / 60%), rgb(30 41 59 / 30%)), url('${bg}')`,
      }}
    >
      <Navigation />
      <div className="container">
        <SearchBox />
        <div className={`${location.pathname !== "/" ? "hidden" : ""}`}>
          <FollowUs />
          <HeaderSlider setBg={setBg} />
        </div>
      </div>
    </header>
  );
}
