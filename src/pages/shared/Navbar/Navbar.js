import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../userContext/UserContext';
import { BiAlignMiddle, BiUserCircle } from "react-icons/bi";
import './Navbar.css'


const Navbar = () => {
    const [display, setDisplay] = useState(false)

    const { user, logOut } = useContext(AuthContext);

    
    const handleLogOut = () => {
        const agreeToLogout = window.confirm("Are You Sure?")
        if (agreeToLogout) {
            logOut()
                .then(res => { })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='' >
            <div className={` bg-[] z-50 w-full header py-5 header-container  flex flex-col md:flex-row justify-around items-center`}>
                <div className="header-logo flex justify-around around items-center w-full  md:w-1/6">

                    {/* header logo and name  */}

                    <Link to='/' className={`font-bold flex  text-lg md:text-3xl`}>
                        <h1 className='text-[#09214d] title-navbar'>Glass Craft</h1>
                    </Link>

                    <button className='block md:hidden' onClick={() => setDisplay(!display)}><BiAlignMiddle></BiAlignMiddle></button>
                </div>
                {/* header links  */}
                <div className={`nav-menu flex  md:items-center flex-col md:flex-row   ${display ? 'flex' : 'hidden md:flex'}`} >
                    <div onClick={() => setDisplay(false)} className="nav-menu-link items-start flex flex-col md:flex-row py-12 md:py-1 ">
                        <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-cyan-700 ' : 'mr-4 text-lg font-semibold   my-2')} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-cyan-700' : 'mr-4 text-lg font-semibold   my-2')} to='/order'>Order</NavLink>


                        {
                            user && <>
                                <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-cyan-700' : 'mr-4 text-lg font-semibold   my-2')} to='/dashboard'>Dashboard</NavLink>

                                <div className='my-3'> {user?.photoURL ? <img src={user?.photoURL} alt="" className="w-8 h-8 rounded-full  " /> : <span className=''><BiUserCircle></BiUserCircle></span>}</div>
                                <button onClick={handleLogOut} className='md:mx-4 text-lg font-semibold my-2'>Sign Out</button>

                            </>
                                
                        }

                    </div>





                </div>
            </div>

        </div>
    )

};

export default Navbar;