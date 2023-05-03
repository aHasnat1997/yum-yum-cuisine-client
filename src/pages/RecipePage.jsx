// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaBookmark } from "react-icons/fa";
import {  toast } from 'react-toastify';

const RecipePage = () => {
  const recipeData = useLoaderData([]);
  const { recipe_name, rating, ingredients, image, cooking_method } = recipeData;
  const [isLiked, setLiked] = useState(false);
  // console.log(recipeData);

  if (isLiked) {
    toast("The recipe is your favorite list");
  }



  return (
    <div className='max-w mt-32 mb-16 flex gap-8'>
      <div className='w-1/2'>
        <h1 className='text-6xl font-bold'>{recipe_name}</h1>
        <p className='text-xl my-4'>Rating: {rating}</p>
        <h2 className='text-4xl mt-8'>Ingredients</h2>
        <ul className='list-disc ml-8 my-4'>
          {
            ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
          }
        </ul>
        <h2 className='text-4xl mt-8'>Cooking Method</h2>
        <ul className='list-disc ml-8 my-4'>
          {
            cooking_method.map((method, i) => <li key={i}>{method}</li>)
          }
        </ul>
      </div>
      <div className='w-1/2 overflow-hidden rounded-3xl relative'>
        <img className='h-full duration-1000 hover:scale-125' src={image} alt="food image" />
        <button onClick={() => setLiked(!isLiked)}
          className={`absolute top-0 right-0 text-8xl text-accent duration-300 ${isLiked ? "opacity-70 btn-disabled" : "opacity-100"}`} role="button" aria-disabled={isLiked ? "true" : "false"}>
          <FaBookmark />
        </button>
      </div>
      
    </div>
  );
};

export default RecipePage;
