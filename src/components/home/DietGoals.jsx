import React from 'react';
import PageLayout from '@/app/layout/PageLayout';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Dumbbell, Zap, Scale, ChevronLeft, ChevronRight } from 'lucide-react';
import Title from '../ui/Title';

const dietGoals = [
    {
        id: 1,
        title: 'Weight lose',
        icon: <Dumbbell className="w-16 h-16 text-primary" />,
    },
    {
        id: 2,
        title: 'Muscle gain',
        icon: <Zap className="w-16 h-16 text-primary" />,
    },
    {
        id: 3,
        title: 'Maintain Weight',
        icon: <Scale className="w-16 h-16 text-primary" />,
    },
    {
        id: 4,
        title: 'Improve Endurance',
        icon: <Dumbbell className="w-16 h-16 text-primary" />,
    },
];

const DietGoals = () => {
    const [api, setApi] = React.useState(null);

    return (
        <PageLayout>
            <div className="flex justify-between items-center mb-8">
                <Title title="Diet Goals" />
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => api?.scrollPrev()}>
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous slide</span>
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => api?.scrollNext()}>
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next slide</span>
                    </Button>
                </div>
            </div>

            <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                    {dietGoals.map((goal) => (
                        <CarouselItem key={goal.id} className="sm:basis-1/2 lg:basis-1/5 mx-auto">
                            <div className="bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm aspect-square">
                                <div className="bg-card p-6 rounded-lg flex-grow flex items-center justify-center w-full">
                                    {goal.icon}
                                </div>
                                <p className="mt-4 text-lg font-semibold text-primary dark:text-foreground">{goal.title}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </PageLayout>
    );
};

export default DietGoals;
