// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from "react-tooltip";

const Nav = () => {
  const { user, singOutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(true);

  const logOut = () => {
    singOutUser()
      .then()
      .catch(error => console.log(error))
  }

  // console.log(user.displayName);

  return (
    <>
      <div className="max-w navbar justify-between absolute top-0 left-0 right-0 z-30">
        <div className="">
          <button onClick={() => setOpen(!open)} className="btn btn-primary text-5xl">
            <HiBars3CenterLeft />
          </button>
        </div>
        <div>
          <Link to='/'><img className='w-40' src={logo} alt="logo" /></Link>
        </div>
        <div>
          {
            user ?
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="rounded-full" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} data-tooltip-variant="light">
                    <img src={
                      user?.photoURL ? `${user?.photoURL}` : `https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg`
                    } />
                  </div>
                  <Tooltip id="my-tooltip"
                    style={{ height: "2.5rem", width: "10rem", fontSize: "1rem" }}
                  />
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li><a>{user?.displayName}</a></li>
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <button onClick={logOut} className='btn btn-outline'>Log Out</button>
                </ul>
              </div>
              :
              <Link to='/login' className="btn btn-primary font-extrabold text-2xl">Sing In</Link>
          }
        </div>
      </div>
      <div className={`w-[80%] md:w-[40%] lg:w-[25%] h-screen transition-all duration-500 glass fixed top-0 z-50 ${open ? "left-[-100rem]" : 'left-0'}`}>
        <div className="flex justify-end">
          <button onClick={() => setOpen(!open)} className='text-4xl text-white'><HiXMark /></button>
        </div>
        <div>
          <img className='w-1/2 mx-auto' src={logo} alt="logo" />
        </div>
        <ul className='text-white font-bold text-4xl ml-8 flex flex-col gap-4'>
          <li><NavLink to='/' className={({ isActive }) => isActive ? "text-secondary" : ""}>
            Home
          </NavLink></li>
          <li><NavLink to='/blog' className={({ isActive }) => isActive ? "text-secondary" : ""} >
            Blog
          </NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => isActive ? "text-secondary" : ""}>
            About Us
          </NavLink></li>
          <li><NavLink to='/contact' className={({ isActive }) => isActive ? "text-secondary" : ""}>
            Contact Us
          </NavLink></li>
        </ul>
      </div >
      <div className={`w-full h-screen bg-black opacity-70 fixed top-0 z-40 ${open ? 'hidden' : 'visible'}`}></div>
    </>
  );
};

export default Nav;
