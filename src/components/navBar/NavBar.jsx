import { Link, NavLink } from "react-router-dom";
import './nav.css'
import Logo from "../logo/Logo";
import SearchBar from "../searchBar/SearchBar";

const NavBar = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/jobs'>Jobs</NavLink></li>
        <li><NavLink to='/messages'>Messages</NavLink></li>
        <li><NavLink to='/notices'>Notices</NavLink></li>
    </>

    return (
        <nav className="drawer sticky top-0 left-0">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full bg-primary-blue text-secondary-white">
                    <div className="flex p-0 navbar max-w-[1440px] mx-auto">
                        <div className="max-lg:flex-1 flex-none max-lg:mx-auto px-2 mx-2">
                            <Link to='/'>
                                <Logo></Logo>
                            </Link>
                        </div>
                        <div className="flex-1 lg:mx-auto text-center hidden lg:block">
                            <ul className="menu text-lg main-nav menu-horizontal">
                                {navLinks}
                            </ul>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none max-lg:hidden">
                            <ul className="menu main-nav menu-horizontal">
                                <li>Hello</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 main-nav w-[75%] sm:w-80 min-h-full bg-primary-blue">
                    <li>
                        <Link to='/'>
                            <Logo LVariant={'dark'}></Logo>
                        </Link>
                    </li>
                    <div className="my-5">
                        <SearchBar></SearchBar>
                    </div>
                    {navLinks}
                </ul>
            </div>
        </nav>

    );
};

export default NavBar;