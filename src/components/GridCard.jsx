// eslint-disable-next-line no-unused-vars
import React from 'react';
import burger from '../assets/burger.jpg';
import sandwich from '../assets/veg-grilled-sandwich.jpg';
import montano from '../assets/chad-montano.jpg';
import chicken from '../assets/fries-chicken.jpg';


const GridCard = () => {
  return (
    <div className='max-w grid lg:grid-cols-3 gap-8 my-8'>
      <div className='row-span-2 rounded-2xl overflow-hidden duration-500 relative'>
        <img className='h-full duration-500 hover:scale-125 brightness-50' src={sandwich} alt="" />
        <div className="absolute top-2 left-4">
          <h2 className='text-6xl font-extrabold text-primary'>Grilled Cheese Sandwich</h2>
          <button className='btn btn-primary mt-4 font-bold'>Order Now</button>
        </div>
      </div>
      <div className='rounded-2xl overflow-hidden duration-500 relative'>
        <img className='duration-500 hover:scale-125 brightness-50' src={burger} alt="" />
        <div className="absolute top-2 right-4">
          <h2 className='text-4xl font-extrabold text-base-100 text-right'>Burger</h2>
          <button className='btn btn-secondary mt-4 font-bold'>Order Now</button>
        </div>
      </div>
      <div className='row-span-2 rounded-2xl overflow-hidden duration-500 relative'>
        <img className='h-full duration-500 hover:scale-125 brightness-50' src={montano} alt="" />
        <div className="absolute bottom-2 right-4 flex flex-col justify-end ">
          <h2 className='text-7xl font-extrabold text-base-100 text-right'>Pancakes</h2>
          <button className='btn btn-secondary mt-4 font-bold'>Order Now</button>
        </div>
      </div>
      <div className='rounded-2xl overflow-hidden duration-500 relative'>
        <img className='duration-500 hover:scale-125 brightness-50' src={chicken} alt="" />
        <div className="absolute top-2 left-4">
          <h2 className='text-4xl font-extrabold text-primary text-right'>Fried Chicken</h2>
          <button className='btn btn-primary mt-4 font-bold'>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
