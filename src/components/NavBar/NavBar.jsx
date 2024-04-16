import { NavLink } from "react-router-dom";


const NavBar = () => {

    const links = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/update-profile'}>Update Profile</NavLink></li>
        <li><NavLink to={'/my-profile'}>My profile</NavLink></li>
        <li><NavLink to={'/estate-details'}>Estate Details</NavLink></li>
       

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                        {links}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {links}

                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <a className="btn bg-green-400 text-white">Sign In</a>
                <a className="btn bg-blue-400 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;