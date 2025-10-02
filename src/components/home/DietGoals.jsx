import React from 'react';
import PageLayout from '@/tools/PageLayout';
import Title from '../ui/Title';
import { Link } from 'react-router-dom';
import { Salad, Dumbbell, Scale } from 'lucide-react';

const diatGoals = [
    {
      name: 'Weight Loss',
      category: "weight_loss",
      icon: <Salad className="w-20 h-20 text-primary" />
    },
    {
      name: 'Muscle Gain',
      category: "muscle_gain",
      icon: <Dumbbell className="w-20 h-20 text-primary" />
    },
    {
      name: 'Maintain Weight',
      category: "weight_and_muscle",
      icon: <Scale className="w-20 h-20 text-primary" />
    },
  ];
  

const DietGoals = () => {
    return (
        <PageLayout>
            <div className="text-center mb-12">
                <Title title="Diet Goals" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {diatGoals.map((goal, i) => (
                    <Link
                        to={`/diet-goals/${goal.category.toLowerCase()}`}
                        className="group"
                        key={i}
                    >
                        <div className="bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm aspect-video">
                            <div className="group-hover:scale-95 transition-all duration-300 bg-card p-6 rounded-lg flex-grow flex items-center justify-center w-full">
                                {goal.icon}
                            </div>
                            <p className="mt-4 text-lg font-semibold text-primary dark:text-foreground">{goal.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </PageLayout>
    );
};

export default DietGoals;
