// eslint-disable-next-line no-unused-vars
import React from 'react';
import Hero from '../components/Hero';
import GridCard from '../components/GridCard';
import ChefCart from '../components/ChefCart';
import Banner from '../components/Banner';

const HomePageLayout = () => {
  return (
    <div>
      <Hero />
      <GridCard />
      <ChefCart />
      <Banner />
    </div>
  );
};

export default HomePageLayout;
