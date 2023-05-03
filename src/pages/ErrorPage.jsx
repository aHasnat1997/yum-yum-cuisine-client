// eslint-disable-next-line no-unused-vars
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Lottie from "lottie-react";
import error from '../assets/lottiefiles/error-animatio.json';

const ErrorPage = () => {
  return (
    <div>
      <Nav />
      <div className='max-w h-screen flex justify-center items-center'>
        <Lottie className='w-1/2' animationData={error} loop={true} />
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
