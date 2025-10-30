import PageLayout from '@/tools/PageLayout';
import { CircleCheck } from 'lucide-react';
import React from 'react';

const GrocerySupport = () => {
  return (
    <div>
      <PageLayout>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-medium mb-4">Automated Grocery Support</h2>
            <p className="text-muted-foreground mb-8">Turn your weekly meal plan into a ready-to-use shopping list and streamline your grocery experience.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <CircleCheck />
                <span>Generate shopping lists based on your selected meals</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheck />
                <span>Organize ingredients by category for easy navigation</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheck />
                <span>Remove items you already have at home</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheck />
                <span>Send your list to Instacart or Amazon Fresh for delivery or pickup</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheck />
                <span>Save time and reduce food waste</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-8">Smart grocery planning means less stress and more success in the kitchen.</p>
          </div>
          <div className='grid justify-center items-center'>
            <img src="/images/scanner.svg" alt="Scanner icon" className="w-72 h-auto" />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default GrocerySupport;
