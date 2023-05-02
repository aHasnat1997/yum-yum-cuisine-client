// eslint-disable-next-line no-unused-vars
import React from 'react';
import Hero from '../components/Hero';
import GridCard from '../components/GridCard';
import ChefCart from '../components/ChefCart';
import Banner from '../components/Banner';
import Food from '../components/Food';
import Discount from '../components/Discount';

const HomePageLayout = () => {
  return (
    <div>
      <Hero />
      <GridCard />
      <ChefCart />
      <Banner />
      <Food />
      <Discount />
    </div>
  );
};

export default HomePageLayout;
