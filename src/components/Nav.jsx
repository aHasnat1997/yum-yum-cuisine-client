// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="max-w navbar justify-between absolute top-0 left-0 right-0 z-30">
        <div className="">
          <button onClick={() => setOpen(!open)} className="btn btn-primary text-5xl">
            <HiBars3CenterLeft />
          </button>
        </div>
        <div>
          <img className='w-40' src={logo} alt="logo" />
        </div>
        <div>
          <button className="btn btn-primary">Sing In</button>
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className={`w-[50%] md:w-[40%] lg:w-[25%] h-screen transition-all duration-500 glass fixed top-0 z-50 ${open ? "left-[-100rem]" : 'left-0'}`}>
        <div className="flex justify-end">
          <button onClick={() => setOpen(!open)} className='text-4xl text-white'><HiXMark /></button>
        </div>
        <div>
          <img className='w-1/2 mx-auto' src={logo} alt="logo" />
        </div>
        <ul className='text-white font-bold text-4xl ml-8 flex flex-col gap-4'>
          <li><NavLink>Home</NavLink></li>
          <li><NavLink>Blog</NavLink></li>
          <li><NavLink>About Us</NavLink></li>
          <li><NavLink>Contact Us</NavLink></li>
        </ul>
      </div>
      <div className={`w-full h-screen bg-black opacity-70 fixed top-0 z-40 ${open ? 'hidden' : 'visible'}`}></div>
    </>
  );
};

export default Nav;
