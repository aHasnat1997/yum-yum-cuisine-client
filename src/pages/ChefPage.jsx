// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";

const ChefPage = () => {
  const chefData = useLoaderData([]);
  const { chef_description, chef_img, chef_name, experience, likes } = chefData;
  // console.log(chefData);

  return (
    <div className='max-w h-screen'>
      <div className='pt-28 flex gap-8'>
        <div className='w-1/2 overflow-hidden rounded-md'>
          <img className='w-full duration-[2000ms] hover:scale-150' src={chef_img} alt="chef image" />
        </div>
        <div className='w-full'>
          <h1 className='text-8xl font-bold'>{chef_name}</h1>
          <p className='text-3xl'>Experience: {experience}</p>
          <p className='flex items-center text-4xl'><AiFillLike />{likes}</p>
          <p className='text-2xl my-16'><span className='font-bold'>About Chef:</span> {chef_description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChefPage;
