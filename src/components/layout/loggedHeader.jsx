import logo from "../../assets/logo.png";
import MenuSelection from "./menuSelection";
import { NavLink } from "react-router-dom";
import React, { use, useState } from "react";
//import { useState } from "react";

//Icones
import { ArrowRightLeft } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Users } from 'lucide-react';
import { Mail } from 'lucide-react';


const Header = () => {
  const [isHovered, notHovered] = useState(null);

  const link = [
    { name: "Cadastro", to: "/" },
    { name: "Liberações", to: "/0" },
    { name: "Usúarios", to: "/0" },
    { name: "Suporte", to: "/0" },
    { name: "Mensagens", to: "/0" }
  ]

    return (
      <>
        <nav className="top-0 w-full flex justify-end items-center py-2 px-5 text-white bg-red-500">
          <NavLink className="font-semibold text-0.7xl">Suporte</NavLink>
        </nav>
        <header className="w-full flex items-center justify-around text-black py-2 px-8 md:px-0 bg-white drop-shadow-md">
          <img className="h-12" src={logo} alt="/" />

                {/*Janela Pop-up de cadastro*/}
                <MenuSelection />     
                
                {/*Liberações*/}
                <NavLink className=" flex justify-center items-center gap-2 text-black cursor-pointer">
                    <ArrowRightLeft />
                    Liberações
                </NavLink>

                {/*Usúarios*/}
                <NavLink className=" flex justify-center items-center gap-2 text-black cursor-pointer">
                    <Users />
                    Usuários
                </NavLink>

                {/*Suporte*/}
                <NavLink className=" flex justify-center items-center gap-2 text-black cursor-pointer">
                    <Headset />
                    Suporte
                </NavLink>

                {/*Mensagens*/}
                <NavLink className=" flex justify-center items-center gap-2 text-black cursor-pointer">
                    <Mail />
                    Mensagens
                </NavLink>

        </header>
      </>
    );
}

export default Header;