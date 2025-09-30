import { Skeleton } from "@/components/ui/skeleton";

const GroceryRecipeCardSkeleton = () => (
  <div className="flex items-center gap-6 border rounded-lg p-4">
    <Skeleton className="w-52 h-52 rounded-r-full" />
    <div className="flex-1 space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-6 w-1/2" />
      </div>
    </div>
  </div>
);

const GroceryCardListSkeleton = () => {
    return (
        <div className="space-y-8">
            <GroceryRecipeCardSkeleton />
            <GroceryRecipeCardSkeleton />
            <GroceryRecipeCardSkeleton />
        </div>
    )
}

export default GroceryCardListSkeleton;
