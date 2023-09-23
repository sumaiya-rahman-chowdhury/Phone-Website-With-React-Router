import { NavLink } from "react-router-dom";
import './navbar.css'
import Logo from "./Logo";
const Navbar = () => {
    return (
        <div className=" py-3 w-full shadow-lg">
            <nav className="flex px-[15px] py-[10px] justify-between items-center">
                <Logo></Logo>
                <ul className=" space-x-4 ">
                    <NavLink to='/' className=''>Home</NavLink>
                    <NavLink to='/favorites'>Favorates</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;