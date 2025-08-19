import { NavLink } from "react-router-dom";

const NavItem = ({to, icon: Icon, children}) => {
    return(
        <NavLink
        to={to}
        className="relative flex justify-center items-center gap-2 text-black cursor-pointer pb-1
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all
        after:duraction-300 hover:after:w-full hover:text-red-500"         
        >
        {Icon && <Icon />}
        {children}
        </NavLink>
    );
}

export default NavItem;