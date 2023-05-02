// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
        </form>
        <hr className='w-1/2 border-1 border-secondary my-4' />
        <div className=''></div>
        <div>
          <p>Already have an account? <Link to='/login' className='btn btn-link text-accent'>Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;