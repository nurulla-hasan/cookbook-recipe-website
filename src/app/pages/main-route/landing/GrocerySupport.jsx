import PageLayout from '@/tools/PageLayout';
import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const GrocerySupport = () => {
  return (
    <div className="bg-white">
      <PageLayout>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-medium mb-4">Automated Grocery Support</h2>
            <p className="text-gray-600 mb-8">Turn your weekly meal plan into a ready-to-use shopping list and streamline your grocery experience.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Generate shopping lists based on your selected meals</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Organize ingredients by category for easy navigation</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Remove items you already have at home</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Send your list to Instacart or Amazon Fresh for delivery or pickup</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Save time and reduce food waste</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-8">Smart grocery planning means less stress and more success in the kitchen.</p>
          </div>
          <div className='grid justify-center items-center'>
            <img src="/public/images/scanner.svg" alt="Scanner icon" className="w-72 h-auto" />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default GrocerySupport;
