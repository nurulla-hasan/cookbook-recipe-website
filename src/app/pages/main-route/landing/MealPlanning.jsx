import PageLayout from '@/tools/PageLayout';
import { CircleCheck } from 'lucide-react';

const MealPlanning = () => {
  return (
    <div>
      <PageLayout>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-medium mb-4">Meal Planning Made Easy</h2>
            <p className="text-muted-foreground mb-8">Your week of healthy eating is just a few taps away. After signing up, you all have access to a personalized dashboard where you can:</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
               <CircleCheck />
                <span>Select daily meals &mdash; from breakfast to desserts</span>
              </li>
              <li className="flex items-center gap-4">
               <CircleCheck />
                <span>Customize weekly meal schedules for convenience and variety</span>
              </li>
              <li className="flex items-center gap-4">
               <CircleCheck />
                <span>Swap recipes instantly to match cravings or goals</span>
              </li>
              <li className="flex items-center gap-4">
               <CircleCheck />
                <span>Rate meals by taste and satisfaction</span>
              </li>
              <li className="flex items-center gap-4">
               <CircleCheck />
                <span>Save favorites for quick access anytime</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-8">Whether you are new to meal prep or a seasoned pro, the app adapts to your lifestyle.</p>
          </div>
          <div className='grid justify-center items-center'>
            <img src="/public/images/Eat%20balanced.svg" alt="Meal health icon" className="w-72 h-auto" />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default MealPlanning;
