import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";
import DESIGNO from "../public/DESIGNO.svg";

const NavBar = () => {
  return (
    <div className="mt-[64px] flex items-center justify-between w-full h-[24]">
      <div className="flex items-center w-[196px] gap-5">
        <Image src={Logo} alt="LOGO ICON" width={24} height={24} />
        <Image src={DESIGNO} alt="LOGO NAME" />
      </div>
      <div className="flex items-center gap-[42px]">
        <Link href="/" className="hover:underline">
          OUR COMPANY
        </Link>
        <Link href="/locations" className="hover:underline">
          LOCATIONS
        </Link>
        <Link href="/contact" className="hover:underline">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
