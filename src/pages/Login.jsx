/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div className='h-screen flex flex-col justify-center items-center'>
        <form className='w-1/2 flex flex-col gap-4'>
          <input type="email" placeholder="Email" className="input input-bordered input-secondary w-full" />
          <input type="password" placeholder="Password" className="input input-bordered input-secondary w-full" />
          <div className='flex gap-4'>
            <input type="submit" value="Submit" className='btn btn-secondary' />
            <input type="reset" value="Reset" className='btn btn-outline btn-accent' />
          </div>
          <div>
            <p>Don't have an account? <Link to='/register' className='btn btn-link text-accent'>Register</Link></p>
          </div>
        </form>
        <hr className='w-1/2 border-1 border-secondary my-4' />
        <div className='flex gap-4'>
          <button className='btn btn-outline btn-secondary btn-wide btn-lg text-base'>
            <FaGoogle className='mr-2' />Sign-in with Google
          </button>
          <button className='btn btn-outline btn-accent btn-wide btn-lg text-base'>
            <FaGithub className='mr-2' />Sign-in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
