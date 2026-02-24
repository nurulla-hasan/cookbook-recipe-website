import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CarouselItem } from "@/components/ui/carousel";

const FeaturedRecipeSkeleton = ({ count = 4 }) => {
    return (
        <>
            {[...Array(count)].map((_, i) => (
                <CarouselItem key={i} className="sm:basis-1/2 lg:basis-1/4">
                    <Card className="overflow-hidden group rounded-2xl gap-2 h-full">
                        <CardHeader className="p-0 relative">
                            <Skeleton className="w-full h-56 rounded-none" />
                            {/* Heart Button Skeleton */}
                            <Skeleton className="absolute top-3 right-3 h-9 w-9 rounded-full" />
                        </CardHeader>
                        <CardContent className="px-4 pb-2">
                            {/* Badge Skeleton */}
                            <Skeleton className="h-5 w-24 rounded-full mb-2" />
                            {/* Title Skeleton */}
                            <Skeleton className="h-6 w-3/4 rounded-md" />
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-between items-center">
                            {/* Time Skeleton */}
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-4 w-4 rounded-full" />
                                <Skeleton className="h-4 w-12" />
                            </div>
                            {/* Rating Skeleton */}
                            <div className="flex items-center gap-1">
                                <Skeleton className="h-4 w-4 rounded-full" />
                                <Skeleton className="h-4 w-8" />
                            </div>
                        </CardFooter>
                    </Card>
                </CarouselItem>
            ))}
        </>
    );
};

export default FeaturedRecipeSkeleton;
