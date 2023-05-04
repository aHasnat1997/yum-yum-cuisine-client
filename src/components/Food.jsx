// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaBookmark } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';

const Food = () => {
  const [foods, setFoods] = useState([]);
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    fetch('https://chef-recipe-hunter-server-beta.vercel.app/recipe')
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  if (isLiked) {
    toast("The recipe is your favorite list");
  }

  const likeBTN = () => {
    setLiked(!isLiked)
  }

  // console.log(foods);

  return (
    <div className='max-w my-16'>
      <h1 className='my-8 text-center text-6xl font-extrabold'>Some of Our Foods</h1>
      <div className='grid lg:grid-cols-2 gap-8'>
        {
          foods.slice(0, 6).map(food => <div key={food.recipe_id}>
            <LazyLoad offset={1200}>
              <div className="card h-full lg:card-side bg-base-100 shadow-xl overflow-hidden">
                <div className="lg:w-1/2 overflow-hidden relative">
                  <img className='w-full h-full duration-500 hover:scale-125' src={food.image} />
                  <button onClick={likeBTN} disabled={isLiked}
                    className={`absolute top-0 right-0 text-6xl text-accent duration-300 ${isLiked ? "opacity-70" : "opacity-100"}`} >
                    <FaBookmark />
                  </button>
                </div>
                <div className="card-body h-full lg:w-1/2">
                  <h2 className="card-title">{food.recipe_name}</h2>
                  <ul>
                    {
                      food.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
                    }
                  </ul>
                  <p>For, more info go to <span className='font-bold'>Learn More</span></p>
                  <div className="card-actions justify-end mt-auto">
                    <Link to={`/recipe/${food.recipe_id}`} className="btn btn-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            </LazyLoad>
          </div>)
        }
      </div>
    </div>
  );
};

export default Food;
