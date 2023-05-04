// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  // const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();


  const formSubmit = e => {
    e.preventDefault();
    const form = e.target.parentNode.parentNode;
    const name = form.childNodes[0].value;
    const photo = form.childNodes[1].value;
    const email = form.childNodes[2].value;
    const password = form.childNodes[3].value;

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        updateData(createdUser, name, photo)
        toast('🎉 Successfully Register');
        navigate('/login');
        form.reset();
      })
      .catch(error => console.log(error));

    const updateData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo
      })
        .then(() => console.log('name add'))
        .catch(error => console.log(error.message))
    }


    console.log(name, photo, email, password);
  }

  return (
    <div>
      <div className='h-screen flex flex-col justify-center items-center'>
        <form className='w-1/2 flex flex-col gap-4'>
          <input type="text" placeholder="User Name" className="input input-bordered input-secondary w-full" required />
          <input type="text" placeholder="Photo URL" className="input input-bordered input-secondary w-full" />
          <input type="email" placeholder="Email" className="input input-bordered input-secondary w-full" required />
          <input type="password" placeholder="Password" className="input input-bordered input-secondary w-full" required />
          <div className='flex gap-4'>
            <input onClick={formSubmit} type="submit" value="Submit" className='btn btn-secondary' />
            <input type="reset" value="Reset" className='btn btn-outline btn-accent' />
          </div>
        </form>
        <hr className='w-1/2 border-1 border-secondary my-4' />
        <div>
          <p>Already have an account? <Link to='/login' className='btn btn-link text-accent'>Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
