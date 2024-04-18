import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FirebaseContext } from "../../FirebaseProvider/FirebaseProvider";


const NavBar = () => {

    const { user, logOut } = useContext(FirebaseContext);

    const handleSignOUt = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/update-profile'}>Update Profile</NavLink></li>
        <li><NavLink to={'/my-profile'}>My profile</NavLink></li>
        <li><NavLink to={'/plans'}>Plans</NavLink></li>


    </>

    return (
        <div className="mx-auto">
            <div className="navbar  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                            {links}

                        </ul>
                    </div>
                    <h1 className="font-bold text-black text-3xl">Jomi <span className="text-orange-400">joma</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end flex gap-3">

                    <div className="w-10 rounded-full">
                        <img className="rounded" alt="profile image " src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    {
                        user ?
                            <button onClick={handleSignOUt} className="btn">Sign out </button> :
                            <Link to="/login" className="btn bg-orange-400 text-white">Sign In</Link>
                    }
                    {/* <a href="#" className="btn bg-green-400 text-white">Register</a> */}


                </div>

            </div>
        </div>
    );
};

export default NavBar;