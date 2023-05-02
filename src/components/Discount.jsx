// eslint-disable-next-line no-unused-vars
import React from 'react';

const Discount = () => {
  return (
    <div className='bg-accent'>
      <div className='max-w py-16 flex justify-between'>
        <div>
          <h3 className='text-6xl font-bold text-primary'>Get 10% off your order!</h3>
          <p className='text-xl text-white'>Enter your email and receive a 10% discount on your next order!</p>
        </div>
        <div className="relative">
          <input type="email" placeholder="Enter Your Email" className="input input-bordered input-primary bg-transparent w-[35rem] text-white mt-4" />
          <button className="btn btn-primary absolute top-4 right-5 lg:right-0">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
