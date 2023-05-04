// eslint-disable-next-line no-unused-vars
import React from 'react';
import Lottie from "lottie-react";
import heroImg from '../assets/lottiefiles/chef-cooking-fish.json'

const Hero = () => {
  return (
    <div className='hero-img overflow-hidden'>
      <div className='max-w h-screen flex flex-col lg:flex-row pt-28 lg:pt-0 items-center justify-between gap-4'>
        <div className='lg:w-1/2'>
          <h2 className='text-primary font-extrabold text-2xl lg:text-4xl uppercase'>American Food</h2>
          <h1 className='text-white font-bold text-4xl lg:text-6xl my-4'>With Special Sauce</h1>
          <p className='text-white text-xl'>American food with special sauce. Lorem ipsum dolor sit </p>
          <button className='btn btn-primary lg:text-xl mt-4 font-bold'>Order Now</button>
        </div>
        <div className='lg:w-1/2 lg:h-1/2'>
          <Lottie animationData={heroImg} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
