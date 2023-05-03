// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";

const ChefPage = () => {
  const chefData = useLoaderData([]);
  const { chef_description, chef_img, chef_name, experience, likes, recipes } = chefData;
  // console.log(chefData);

  return (
    <div className='max-w'>
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
      <div className='my-16 grid grid-cols-3 gap-4'>
        {
          recipes.map(recipe => <div key={recipe.recipe_id} className=''>
            <div className="card h-full lg:card-side bg-base-100 shadow-xl overflow-hidden">
              <div className="w-1/2 overflow-hidden">
                <img className='w-full h-full duration-500 hover:scale-125' src={recipe.image} alt="Shoes" />
              </div>
              <div className="card-body">
                <h2 className="card-title">{recipe.recipe_name}</h2>
                <div className="card-actions justify-end mt-auto">
                  <Link to={`/recipe/${recipe.recipe_id}`} className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default ChefPage;
