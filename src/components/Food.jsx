// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Food = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('https://chef-recipe-hunter-server-beta.vercel.app/recipe')
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  // console.log(foods);

  return (
    <div className='max-w my-16'>
      <h1 className='my-8 text-center text-6xl font-extrabold'>Some of Our Foods</h1>
      <div className='grid grid-cols-2 gap-8'>
        {
          foods.slice(0, 6).map(food => <div key={food.recipe_id}>
            <div className="card h-full lg:card-side bg-base-100 shadow-xl overflow-hidden">
              <img className='w-1/2' src={food.image} alt="Album" />
              <div className="card-body">
                <h2 className="card-titlen text-3xl font-bold">{food.recipe_name}</h2>
                <ul>
                  {
                    food.ingredients.slice(0, 5).map((ingredient, i) => <li key={i}>{ingredient}</li>)
                  }
                </ul>
                <div className="card-actions justify-end mt-auto">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Food;
