import React from "react";
import logo from "../assets/senai.png";

const Header = () => {
    <>
      <nav className="top-0 w-full flex justify-end items-center py-2 px-5 text-white bg-red-500">
        <p className="font-semibold text-0.7xl">Suporte</p>
      </nav>
      <header className="w-full flex justify-center text-black py-2 px-8 md:px-0 bg-white drop-shadow-md">
        <img className="h-10" src={logo} alt="" />
      </header>
    </>;
}

export default Header;