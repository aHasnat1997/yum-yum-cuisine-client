/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';

const Login = () => {
  const { singInUser, googlePopup, githubPopup } = useContext(AuthContext);
  // const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/';

  const formSubmit = e => {
    e.preventDefault();
    const form = e.target.parentNode.parentNode;
    const email = form.childNodes[0].value;
    const password = form.childNodes[1].value;

    singInUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        toast('🎉 Successfully Log In');
        navigate(from, { replace: true });
        form.reset();
      })
      .catch(error => {
        const message = error.message;
        toast('⛔', message);
        console.log(message);
      });


    // console.log(email, password);
  }

  const google = () => {
    googlePopup()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        toast('🎉 Successfully Log In with Google');
        navigate(from, { replace: true });
        console.log(user, token);
      })
      .catch((error) => console.log(error.code, error.message));
  }

  const github = () => {
    githubPopup()
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        toast('🎉 Successfully Log In with GitHub');
        navigate(from, { replace: true });
        console.log(user, token);
      })
      .catch((error) => console.log(error.code, error.message));
  }



  return (
    <div>
      <div className='h-screen flex flex-col justify-center items-center'>
        <form className='w-1/2 flex flex-col gap-4'>
          <input type="email" placeholder="Email" className="input input-bordered input-secondary w-full" required />
          <input type="password" placeholder="Password" className="input input-bordered input-secondary w-full" required />
          <div className='flex gap-4'>
            <input onClick={formSubmit} type="submit" value="Submit" className='btn btn-secondary' />
            <input type="reset" value="Reset" className='btn btn-outline btn-accent' />
          </div>
          <div>
            <p>Don't have an account? <Link to='/register' className='btn btn-link text-accent'>Register</Link></p>
          </div>
        </form>
        <hr className='w-1/2 border-1 border-secondary my-4' />
        <div className='flex gap-4'>
          <button onClick={google} className='btn btn-outline btn-secondary btn-wide btn-lg text-base'>
            <FaGoogle className='mr-2' />Sign-in with Google
          </button>
          <button onClick={github} className='btn btn-outline btn-accent btn-wide btn-lg text-base'>
            <FaGithub className='mr-2' />Sign-in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
