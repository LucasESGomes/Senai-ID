import logo from "../assets/logo.png";
import MenuSelection from "../components/menuSelection.jsx";
import { NavLink } from "react-router-dom";

//Icones

import { ArrowRightLeft } from 'lucide-react';

const Header = () => {
    return (
      <>
        <nav className="top-0 w-full flex justify-end items-center py-2 px-5 text-white bg-red-500">
          <p className="font-semibold text-0.7xl">Suporte</p>
        </nav>
        <header className="w-full flex justify-around text-black py-2 px-8 md:px-0 bg-white drop-shadow-md">
          <img className="h-12" src={logo} alt="/" />


                <MenuSelection />     
                
                <p className=" flex justify-center items-center gap-2 text-black cursor-pointer">
                    <ArrowRightLeft/>
                    Liberações
                </p>

        </header>
      </>
    );
}

export default Header;