// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagramSquare, FaYoutube, FaTwitter, FaRegArrowAltCircleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer flex flex-col'>
      <div className="pt-8 mx-auto footer-logo">
        <img className='w-64' src={logo} alt="" />
      </div>
      <div className='max-w grid lg:grid-cols-4 gap-4 justify-items-center justify-evenly'>
        <div>
          <h3 className='text-white text-4xl font-bold text-center'>ADDRESS</h3>
          <p className='text-gray-300 text-center mt-4 text-xl'>570 8th Ave, New York, NY 10018 United States</p>
        </div>
        <div>
          <h3 className='text-white text-4xl font-bold text-center'>BOOK A TABLE</h3>
          <p className='text-gray-300 text-center mt-4 text-xl'>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
          <p className='text-primary text-center mt-4 text-xl font-bold'>(850) 435-4155</p>
        </div>
        <div>
          <h3 className='text-white text-4xl font-bold text-center'>OPENING HOURS</h3>
          <p className='text-gray-300 text-center mt-4 text-xl'>Monday - Friday: 8am - 4pm</p>
          <p className='text-gray-300 text-center text-xl'>Saturday: 9am - 5pm</p>
          <p className='text-primary text-center mt-4 text-4xl flex justify-evenly'>
            <FaFacebook />
            <FaInstagramSquare />
            <FaYoutube />
            <FaTwitter />
          </p>
        </div>
        <div>
          <h3 className='text-white text-4xl font-bold text-center'>NEWSLETTER</h3>
          <p className='text-gray-300 text-center mt-4 text-xl'>Subscribe to the weekly newsletter for all the latest updates</p>
          <div className="relative">
            <input type="email" placeholder="Enter Your Email" className="input input-bordered input-primary bg-transparent w-full max-w-xs text-white mt-4" />
            <button className="btn btn-ghost btn-circle text-2xl text-white absolute top-4 right-5 lg:right-1">
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <hr className='w-full' />
        <h3 className='mx-auto my-8 lg:text-2xl text-primary font-bold'>Copyright © 2023 YUM YUM Food. All Rights Reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
