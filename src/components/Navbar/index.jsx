"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white w-full shadow-sm sticky top-0 px-6 md:px-14">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <div className="flex items-center justify-between w-full md:w-max">
          <div className="flex items-center justify-between md:gap-16 md:w-max">
            <Link href="/">
              <img
                src="./images/logo-desktop.png"
                alt="logo"
                className="w-[147px] h-[25px] hidden md:block"
              />
            </Link>
            <Link href="/">
              <img
                src="./images/logo-mobile.png"
                alt="logo"
                className="w-[19px] h-[25px] block md:hidden"
              />
            </Link>
            <ul className="hidden md:flex flex-col items-center space-y-3 md:space-y-0 justify-center p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/products"
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="block py-2 px-3 text-[#080445] text-base font-medium bg-transparent md:border-0 md:hover:text-[#6D60F6] md:p-0 md:w-auto">
                  Buyer{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-[#6D60F6] text-base font-bold rounded bg-transparent hover:text-[#6D60F6] md:p-0"
                  onClick={handleToggleMenu}>
                  Seller
                </Link>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <ul>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-[#6D60F6] text-base font-bold rounded bg-transparent hover:text-[#6D60F6] md:p-0"
                  onClick={handleToggleMenu}>
                  Seller
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <div className="md:hidden" onClick={handleToggleMenu}>
              <img src="/icons/hamburger.png" alt="hamburger-icon" />
            </div>
          </div>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}>
          <div className="flex flex-col items-center space-y-6 md:space-y-0 justify-center p-4 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-white">
            <div className="flex items-center flex-col gap-2">
              <div className=" bg-transparent">
                <Link
                  href="#"
                  className="flex md:hidden items-center justify-between w-full py-2 px-3 text-[#080445] text-base font-medium bg-transparent md:border-0 md:hover:text-[#6D60F6] md:p-0 md:w-auto"
                  onClick={handleToggleMenu}>
                  {" "}
                  Buyer
                </Link>
              </div>
              <div className=" bg-transparent">
                <Link
                  href="#"
                  className="flex items-center justify-between w-full py-2 px-3 text-[#080445] text-base font-medium bg-transparent md:border-0 md:hover:text-[#6D60F6] md:p-0 md:w-auto"
                  onClick={handleToggleMenu}>
                  {" "}
                  Help center
                </Link>
              </div>
            </div>
            <div className="flex gap-6">
              <button
                className="flex items-center hover:scale-105 border border-[#6D60F6] py-3 px-5 rounded-[10px]"
                onClick={handleToggleMenu}>
                <span className="text-[#6D60F6] font-semibold">Log In</span>
              </button>
              <button
                className="flex items-center hover:scale-105 bg-[#6D60F6] py-3 px-5 rounded-[10px]"
                onClick={handleToggleMenu}>
                <span className="text-white font-semibold">Get started</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
