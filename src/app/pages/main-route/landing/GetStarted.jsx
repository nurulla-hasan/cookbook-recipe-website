
import { CircleCheckBig, PhoneCall, AtSign, MapPinHouse } from 'lucide-react';
import PageLayout from '@/tools/PageLayout';
import { Separator } from '@/components/ui/separator';

const GetStarted = () => {
  return (
    <div>
      <PageLayout>
        <div>
          <h2 className="text-4xl font-medium mb-4">Get Started Today</h2>
          <p className="text-muted-foreground mb-8">Download The Koumanis Diet Meal Planner on the App Store or Google Play and begin your journey.</p>
          <div className="max-w-md">
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>No more guesswork</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>No more boring diet food</span>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckBig />
                <span>No more skipped meals or grocery store confusion</span>
              </li>
            </ul>
          </div>
          <p className="text-muted-foreground mt-8">Just smart, flavorful, goal-aligned eating&mdash;designed by experts, enjoyed by you.</p>
        </div>

        <div className='mt-12'>
          <h2 className="text-4xl font-medium mb-2">Contact Us</h2>
          <Separator />
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="flex items-center gap-4">
              <div className='rounded-full flex justify-center items-center p-4 bg-[#498773]'>
                <PhoneCall className='text-white' />
              </div>
              <div>
                <h3 className="font-bold text-left">Call</h3>
                <p className="text-muted-foreground">518-203-2593</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className='rounded-full flex justify-center items-center p-4 bg-[#498773]'>
                <AtSign className='text-white' />
              </div>
              <div>
                <h3 className="font-bold text-left">Email</h3>
                <p className="text-muted-foreground">support@koumanisdiet.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className='rounded-full flex justify-center items-center p-4 bg-[#498773]'>
                <MapPinHouse className='text-white' />
              </div>
              <div>
                <h3 className="font-bold text-left">Address</h3>
                <p className="text-muted-foreground">13 Chester St. Glens Falls NY 12801</p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default GetStarted;