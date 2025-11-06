import React, { useState } from 'react';
import Hero from './Hero';
import Features from './Features';
import MealPlanning from './MealPlanning';
import Recipes from './Recipes';
import KnowledgeHub from './KnowledgeHub';
import GrocerySupport from './GrocerySupport';
import PocketCoach from './PocketCoach';
import GetStarted from './GetStarted';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';
import VideoModal from '@/components/common/modal/VideoModal';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="relative">
        <Hero />
        {/* Floating bar bridging to next section */}
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-20 translate-y-1/2 md:translate-y-1/2 flex items-center justify-center z-50">
          <div className="mx-auto w-[92%] max-w-3xl bg-background text-foreground rounded-xl shadow-lg px-4 md:px-6 py-4 md:py-3 flex items-center justify-between gap-4">
            <div
              className="text-xl md:text-4xl font-medium cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Click to Watch Video <span className="text-pink-500">+</span>
            </div>
            <Button
              variant="outline"
              className="md:h-20 h-16 md:w-28 w-20 rounded-xl flex flex-col items-center justify-center gap-1"
              onClick={() => {
                document.getElementById('get-app').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDownToLine className="h-10 w-10" />
              <span className="md:text-lg text-sm font-medium">Get App</span>
            </Button>
          </div>
        </div>
      </div>
      <Features />
      <MealPlanning />
      <Recipes />
      <KnowledgeHub />
      <GrocerySupport />
      <PocketCoach />
      <GetStarted />
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc="https://drive.google.com/file/d/1B7oQn5zQK2EKbhQwWykt7k39jFTzd_ze/preview"
      />
    </div>
  );
};

export default LandingPage;
