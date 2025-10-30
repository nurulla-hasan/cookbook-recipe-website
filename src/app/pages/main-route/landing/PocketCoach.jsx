import PageLayout from '@/tools/PageLayout';
import { CircleCheckBig } from 'lucide-react';

const PocketCoach = () => {
  return (
    <div>
      <PageLayout>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-medium  mb-4">Your Pocket-Sized Coach</h2>
            <p className="text-muted-foreground mb-8">The Koumanis Diet is more than a meal planner&mdash;it is your personal wellness companion, built on science and behavior.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Personalized meal recommendations based on your goals</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Real-time feedback on nutrition and progress</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Behavior-focused habit tracking</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>Evidence-based coaching for weight loss, strength, and gut health</span>
              </li>
              <li className="flex items-center gap-4">
               <CircleCheckBig />
                <span>Supportive tools to stay motivated and consistent</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-8">Your goals are within reach&mdash;with a coach that fits in your pocket.</p>
          </div>
          <div className='grid justify-center items-center'>
            <img src="/public/images/phone-14.svg" alt="Phone icon" className="w-72 h-auto" />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default PocketCoach;
