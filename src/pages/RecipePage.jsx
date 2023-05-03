// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipePage = () => {
  const recipeData = useLoaderData([]);
  const { recipe_name, rating, ingredients, image, cooking_method } = recipeData;
  // console.log(recipeData);

  return (
    <div className='max-w mt-32 mb-16 flex gap-8'>
      <div>
        <h1 className='text-6xl font-bold'>{recipe_name}</h1>
        <p className='text-xl my-4'>Rating: {rating}</p>
        <h2 className='text-4xl mt-8'>Ingredients</h2>
        <ul className='list-disc ml-8 my-4'>
          {
            ingredients.map((ingredient, i)=><li key={i}>{ingredient}</li>)
          }
        </ul>
        <h2 className='text-4xl mt-8'>Cooking Method</h2>
        <ul className='list-disc ml-8 my-4'>
          {
            cooking_method.map((method, i)=><li key={i}>{method}</li>)
          }
        </ul>
      </div>
      <div className='overflow-hidden rounded-3xl'>
        <img className='h-full duration-500 hover:scale-125' src={image} alt="food image" />
      </div>
    </div>
  );
};

export default RecipePage;
