import React, { useState } from "react";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";

export default function Header() {
  const [bg, setBg] = useState("/cinema.jpg");

  return (
    <header
      className="py-12 transition-all duration-500 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 80%), rgb(0 0 0 / 40%), rgb(0 0 0 / 70%)), url('${bg}')`,
      }}
    >
      <div className="container">
        <Navigation />
        <SearchBox />
        <FollowUs />
        <HeaderSlider setBg={setBg} />
      </div>
    </header>
  );
}
