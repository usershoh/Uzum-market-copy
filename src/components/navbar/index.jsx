import React from "react";
import NavbarTop from "./navbar_top";
import NavbarBottom from "./navbar_bottom";

import img from "../../assets/img/showcase_img.png";

const Navbar = () => {
  return (
    <header className="w-[80%] m-auto pb-[30px]">
      <NavbarTop />
      <NavbarBottom />
      {/* <button className="cursor-pointer pt-[20px]">
        <img src={img} alt="" />
      </button> */}
    </header>
  );
};

export default Navbar;
