import React from 'react';
import PageLayout from '@/app/layout/PageLayout';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Heart, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Title from '../ui/Title';
import { Link } from 'react-router-dom';
import { useGetFeaturedRecipesQuery } from '@/redux/feature/home/homeApi';
import { getImageUrl } from '@/lib/utils';

const FeaturedRecipes = () => {

    const { data: recipes, isLoading, isError } = useGetFeaturedRecipesQuery();

    const [api, setApi] = React.useState(null);

    return (
        <section id='featured-recipes'>
            <PageLayout>
                <div className="flex flex-row justify-between items-center gap-2 mb-8">
                    <Title title="Featured Recipes" />
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
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : isError ? (
                            <p>Error fetching recipes</p>
                        ) : recipes?.data?.length === 0 ? (
                            <p>No recipes found</p>
                        ) : (
                            recipes?.data?.result?.slice(0, 6).map((recipe) => (
                                <CarouselItem key={recipe._id} className="sm:basis-1/2 lg:basis-1/4">
                                    <Link
                                        to={`/recipes/recipe-details/${recipe._id}`}
                                        state={{ from: 'Featured', fromPath: '/#featured-recipes' }}
                                        className="h-full group transition-all duration-300 hover:-translate-y-1 block"
                                    >
                                        <Card className="overflow-hidden group rounded-2xl">
                                            <CardHeader className="p-0 relative">
                                                <img
                                                 src={getImageUrl(recipe.image)}
                                                  alt={recipe.title}
                                                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                                  onError={(e) => {
                                                    e.target.src = `https://placehold.co/400?text=${recipe.name}&font=roboto`;
                                                  }}
                                                   />
                                                <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-secondary/80 hover:bg-secondary rounded-full h-9 w-9">
                                                    <Heart className="w-5 h-5 text-primary dark:text-foreground" />
                                                </Button>
                                            </CardHeader>
                                            <CardContent className="px-4">
                                                <p className="text-sm text-muted-foreground mb-1">{recipe.category}</p>
                                                <h3 title={recipe.title} className="text-lg font-semibold mt-1 text-primary dark:text-foreground line-clamp-1">{recipe.title}</h3>
                                            </CardContent>
                                            <CardFooter className="p-4 pt-0 flex justify-between items-center text-muted-foreground">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{recipe.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-sm">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                    <span className="font-medium">{recipe.rating}</span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                </CarouselItem>
                            )))}
                    </CarouselContent>
                </Carousel>
            </PageLayout>
        </section>
    );
};

export default FeaturedRecipes;
