import React, { useState } from "react";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";

export default function Header() {
  const [bg, setBg] = useState("/cinema.jpg");

  return (
    <header
      className="transition-all duration-500 bg-cover bg-center pb-8 md:py-8"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(30 41 59 / 100%), rgb(30 41 59 / 50%), rgb(30 41 59 / 20%)), url('${bg}')`,
      }}
    >
      <Navigation />
      <div className="container">
        <SearchBox />
        <FollowUs />
        <HeaderSlider setBg={setBg} />
      </div>
    </header>
  );
}
