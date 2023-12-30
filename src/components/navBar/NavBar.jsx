import { Link, NavLink } from "react-router-dom";
import './nav.css'
import Logo from "../logo/Logo";
import Btn from "../buttons/Btn";
import { FaHome } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { useState } from "react";
import SideBar from "../sideBar/sideBar";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = <>
        <li><NavLink to='/'><FaHome></FaHome></NavLink></li>
        <li><NavLink to='/jobs'><MdOutlineWorkOutline></MdOutlineWorkOutline></NavLink></li>
        <li><NavLink to='/messages'><IoMdMail></IoMdMail></NavLink></li>
        <li><NavLink to='/notices'><IoMdNotifications></IoMdNotifications></NavLink></li>
    </>

    return (
        <nav className="drawer sticky top-0 left-0">
            <input onClick={toggleSidebar} id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full bg-primary-blue text-secondary-white">
                    <div className="flex relative p-1 items-center pr-2 max-w-[1920px] mx-auto">
                        <div className="flex gap-4 flex-none max-lg:mx-auto px-2 mx-2">
                            <Link to='/'>
                                <Logo></Logo>
                            </Link>
                        </div>
                        <div className="flex-1 lg:mx-auto text-center">
                            <ul className="menu text-xl sm:text-2xl main-nav menu-horizontal">
                                {navLinks}
                            </ul>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none max-lg:hidden">
                            <ul className="menu main-nav gap-2 menu-horizontal">
                                <Btn white>Register</Btn>
                                <Btn >Login</Btn>
                            </ul>
                        </div>
                        <SideBar sm isOpen={isOpen}></SideBar>
                    </div>
                </div>
            </div>

        </nav>

    );
};

export default NavBar;