import logo from "../assets/logo.png";
import MenuSelection from "./assets/menuSelection.png";
import { ArrowRightLeft } from 'lucide-react';

const Header = () => {
    return (
      <>
        <nav className="top-0 w-full flex justify-end items-center py-2 px-5 text-white bg-red-500">
          <p className="font-semibold text-0.7xl">Suporte</p>
        </nav>
        <header className="w-full flex text-black py-2 px-8 md:px-0 bg-white drop-shadow-md">
          <img className="h-10" src={logo} alt="/" />

            <div>
                <MenuSelection />     
           </div>
           <div>
                <ArrowRightLeft/>
                <p>Liberações</p>
           </div>
        </header>
      </>
    );
}

export default Header;