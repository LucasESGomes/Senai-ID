import logo from "../../assets/senai.png";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
      <>
        <nav className="top-0 w-full flex justify-end items-center py-2 px-5 text-white bg-red-500">
          <NavLink to="/suporte">
            <p className="font-semibold text-0.7xl">Suporte</p>
          </NavLink>
        </nav>
        <header className="w-full flex justify-center text-black py-2 px-8 md:px-0 bg-white drop-shadow-md">
          <NavLink to="/">
            <img className="h-10" src={logo} alt="/" />
          </NavLink>
        </header>
      </>
    );
}

export default Header;