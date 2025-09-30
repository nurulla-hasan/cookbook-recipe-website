import { Skeleton } from "@/components/ui/skeleton";
import PageLayout from "@/tools/PageLayout";

// This will be the skeleton for one recipe card
const RecipeCardSkeleton = () => (
  <div className="border rounded-lg overflow-hidden flex-shrink-0 bg-background/20">
    <Skeleton className="h-40 w-full" />
    <div className="p-4 space-y-2">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/4" />
    </div>
  </div>
);

// This will be the skeleton for the placeholder card to add a new recipe
const AddRecipeSkeleton = () => (
  <div className="border-2 border-dashed rounded-lg flex-shrink-0 h-60 flex flex-col items-center justify-center">
    <Skeleton className="h-8 w-8 rounded-lg" />
    <Skeleton className="h-4 w-40 mt-4 rounded-lg" />
  </div>
)

// This will be the skeleton for one day's section
const DaySectionSkeleton = () => (
  <div className="space-y-4 border p-4 rounded-lg">
    <div className="flex items-center justify-between">
      <Skeleton className="h-7 w-20" /> {/* Day-X tag */}
      <div className="flex flex-wrap justify-end gap-4 pr-4">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-24" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto">
      <RecipeCardSkeleton />
      <RecipeCardSkeleton />
      <AddRecipeSkeleton />
    </div>
  </div>
);

const MealPlannerSkeleton = () => {
  return (

    <>
      {/* PageHeader Skeleton - with dark background to match screenshot */}
      <div className="bg-secondary flex flex-col justify-center items-center h-42">
        {/* Title Skeleton */}
        <Skeleton className="h-8 w-1/7 mb-4" />
        {/* Breadcrumbs Skeleton */}
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <PageLayout paddingSize="compact">
        <div className="space-y-6">
          {/* Tabs and Dropdown Skeleton */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-32" />
              <Skeleton className="h-9 w-32" />
            </div>
            <div className="hidden md:block">
              <Skeleton className="h-9 w-32" />
            </div>
          </div>
          <div className="mt-2">
            <Skeleton className="h-9 w-full md:w-48" />
          </div>

          {/* Day Sections Skeleton */}
          <div className="space-y-12 mt-8">
            <DaySectionSkeleton />
            <DaySectionSkeleton />
            <DaySectionSkeleton />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default MealPlannerSkeleton;