import React from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import DESIGNO from "../public/DESIGNO.svg";

const NavBar = () => {
  return (
    <div className="mt-[64px] flex items-center w-full h-[24]">
      <div className="flex items-center w-[196px] gap-5">
        <Image src={Logo} alt="LOGO ICON" width={24} height={24} />
        <Image src={DESIGNO} alt="LOGO NAME" />
      </div>
      <div className="flex items-center"></div>
    </div>
  );
};

export default NavBar;
