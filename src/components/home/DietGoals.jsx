import React from 'react';
import PageLayout from '@/app/layout/PageLayout';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Title from '../ui/Title';
import { Link } from 'react-router-dom';
import { diatGoals } from '@/lib/mockData';

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
                    {diatGoals.map((goal, i) => (
                        <CarouselItem key={i} className="sm:basis-1/2 lg:basis-1/5 mx-auto">
                            <Link
                                to={`/diat-gols/${goal.name.replace(" ", "-").toLowerCase()}`}
                                className="group"
                                key={i}
                            >
                                <div className="group-hover:scale-95 transition-all duration-300 bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm aspect-square">
                                    <div className="bg-card p-6 rounded-lg flex-grow flex items-center justify-center w-full">
                                        {goal.icon}
                                    </div>
                                    <p className="mt-4 text-lg font-semibold text-primary dark:text-foreground">{goal.name}</p>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </PageLayout>
    );
};

export default DietGoals;
