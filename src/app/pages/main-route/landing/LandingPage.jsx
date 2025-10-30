import React from 'react';
import Hero from './Hero';
import Features from './Features';
import MealPlanning from './MealPlanning';
import Recipes from './Recipes';
import KnowledgeHub from './KnowledgeHub';
import GrocerySupport from './GrocerySupport';
import PocketCoach from './PocketCoach';
import GetStarted from './GetStarted';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <MealPlanning />
      <Recipes />
      <KnowledgeHub />
      <GrocerySupport />
      <PocketCoach />
      <GetStarted />
    </div>
  );
};

export default LandingPage;
