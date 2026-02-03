import PageLayout from '@/tools/PageLayout';
import PageHeader from '@/components/common/page-header/PageHeader';
import { useParams, useLocation } from 'react-router-dom';
import RecipeCard from '@/components/Recipes/recipe-card/RecipeCard';
import useSmartFetchHook from '@/hooks/useSmartFetchHook';
import { useGetRecipeByCategoryQuery } from '@/redux/feature/home/homeApi';
import CustomPagination from '@/components/common/custom-pagination/CustomPagination';
import Error from '@/components/common/error/Error';
import NoData from '@/components/common/no-data/NoData';
import CategoryPageSkeleton from '@/components/skeleton/category/CategoryPageSkeleton';
import AddToPlanModal from '@/components/Recipes/add-plan-modal/AddToPlanModal';
import { useDispatch, useSelector } from 'react-redux';
import { SetCardModalClose, SetRecipeId } from '@/redux/feature/meal-plan/addMealPlanSlice';

const Category = () => {
    const dispatch = useDispatch();
    const { cardModalOpen } = useSelector((state) => state.addMealPlan);
    const { slug: categoryId } = useParams();
    const location = useLocation();
    
    // Get category name from query params
    const queryParams = new URLSearchParams(location.search);
    const categoryName = queryParams.get('name') || "Category";

    const {
        currentPage,
        setCurrentPage,
        totalPages,
        items: recipes,
        isLoading,
        isError,
    } = useSmartFetchHook(useGetRecipeByCategoryQuery, { resultsKey: "result" }, { category: categoryId });

    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: categoryName },
    ];

    if (isLoading) {
        return <CategoryPageSkeleton />;
    }

    return (
        <>
            <PageHeader
                breadcrumbs={breadcrumbs}
                title={categoryName}
            />
            <PageLayout
                pagination={
                    totalPages > 1 && (
                        <div className="absolute bottom-4 left-0 right-0">
                            <CustomPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    )
                }
                paddingSize="compact">
                <div className="grid gap-6 grid-cols-1">
                    {isError ? (
                        <Error size="perfect" msg="Something went wrong" />
                    ) : (
                        recipes.length === 0 ? (
                            <NoData size="perfect" msg="No recipes found" />
                        ) : (
                            recipes.map(recipe => (
                                <RecipeCard
                                    key={recipe._id}
                                    recipe={recipe}
                                    from={categoryName}
                                    fromPath={`/category/${categoryId}?name=${encodeURIComponent(categoryName)}`}
                                    showCartButton={true}
                                />
                            ))
                        )
                    )}
                </div>
            </PageLayout>

            {/* Add to Plan Modal */}
            <AddToPlanModal
                isOpen={cardModalOpen}
                onClose={() => {
                    dispatch(SetCardModalClose());
                    dispatch(SetRecipeId(null));
                }}
            />
        </>
    );
};

export default Category;