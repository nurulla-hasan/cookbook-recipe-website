import PageLayout from '@/tools/PageLayout';
import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Recipes = () => {
  return (
    <div className="bg-white">
      <PageLayout>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-medium mb-4">Recipes for Every Lifestyle</h2>
            <p className="text-gray-600 mb-8">Eating healthy should be enjoyable, not restrictive. Explore a variety of cuisines and dietary styles, including:</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Vegan and plant-based</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Paleo, Mediterranean, and low-carb</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>High-protein, meat-based meals</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Global flavors &mdash; Asian, Latin, Middle Eastern, and more</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Holiday-friendly recipes to celebrate without losing progress</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-8">Our nutrition system works hand in hand with exercise to accelerate results when you want them most.</p>
          </div>
          <div className='grid justify-center items-center'>
            <img src="/public/images/Meal health_3.svg" alt="Eat balanced icon" className="w-72 h-auto" />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Recipes;
