// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div className='grid lg:grid-cols-2 gap-8'>
        {
          foods.slice(0, 6).map(food => <div key={food.recipe_id}>
            <div className="card h-full lg:card-side bg-base-100 shadow-xl overflow-hidden">
              <div className="lg:w-1/2 overflow-hidden">
                <img className='w-full h-full duration-500 hover:scale-125' src={food.image} alt="Shoes" />
              </div>
              <div className="card-body">
                <h2 className="card-title">{food.recipe_name}</h2>
                <ul>
                  {
                    food.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
                  }
                </ul>
                <div className="card-actions justify-end mt-auto">
                  <Link to={`/recipe/${food.recipe_id}`} className="btn btn-primary">Learn More</Link>
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
