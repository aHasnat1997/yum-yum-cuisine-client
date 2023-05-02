// eslint-disable-next-line no-unused-vars
import React from 'react';

const Banner = () => {
  return (
    <div className="banner-img flex items-center justify-center">
      <div className='flex flex-col items-center justify-center gap-4 py-20 px-4'>
        <h3 className='text-4xl font-bold text-secondary'>We Guarantee</h3>
        <h2 className='text-6xl font-extrabold text-center'>30 Minutes Delivery!</h2>
        <p className='text-center'>If you’re having a meeting, working late at night and need an <br /> extra push. Let us know and we will be there</p>
          <button className='btn btn-secondary btn-lg text-xl mt-4 font-bold'>MAKE AN ORDER</button>
      </div>
    </div>
  );
};

export default Banner;
