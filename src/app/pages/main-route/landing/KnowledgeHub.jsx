import PageLayout from '@/tools/PageLayout';
import { CircleCheck } from 'lucide-react';
import React from 'react';

const KnowledgeHub = () => {
  return (
    <div>
      <PageLayout>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-medium mb-4">Meal Planning Knowledge Hub</h2>
            <p className="text-muted-foreground mb-8">Access a library of articles and guides from nutritionists and fitness coaches. Empower yourself with knowledge to make lasting changes.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
               <CircleCheck />
                <span>Evidence-based articles on nutrition and fitness</span>
              </li>
              <li className="flex items-center gap-4">
               <CircleCheck />
                <span>Cooking tips and healthy kitchen hacks</span>
              </li>
              <li className="flex items-center gap-4">
               <CircleCheck />
                <span>Guides to understanding food labels and ingredients</span>
              </li>
              <li className="flex items-center gap-4">
               <CircleCheck />
                <span>Community support and expert Q&A sessions</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-8">Knowledge is power&mdash;especially when paired with smart nutrition and exercise.</p>
          </div>
          <div className='grid justify-center items-center'>
            <img src="/public/images/Meal health.svg" alt="Knowledge hub icon" className="w-72 h-auto" />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default KnowledgeHub;
