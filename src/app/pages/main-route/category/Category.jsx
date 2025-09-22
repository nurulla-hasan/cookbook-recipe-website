import PageLayout from '@/app/layout/PageLayout';
import PageHeader from '@/components/common/page-header/PageHeader';
import { useParams } from 'react-router-dom';
import RecipeCard from '@/components/Recipes/recipe-card/RecipeCard';
import useSmartFetchHook from '@/hooks/useSmartFetchHook';
import { useGetRecipeByCategoryQuery } from '@/redux/feature/home/homeApi';
import CustomPagination from '@/components/common/custom-pagination/CustomPagination';
import Error from '@/components/common/error/Error';
import NoData from '@/components/common/no-data/NoData';
import RecipeCardSkeleton from '@/components/skeleton/recipe/RecipeCardSkeleton';

const Category = () => {
    const { slug: category } = useParams();
    const formattedSlug = category.charAt(0).toUpperCase() + category.slice(1);

    const {
        // searchTerm,
        // setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
        items: recipes,
        isLoading,
        isError,
    } = useSmartFetchHook(useGetRecipeByCategoryQuery, { resultsKey: "result" }, { category });

    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: formattedSlug },
    ];

    return (
        <>
            <PageHeader
                breadcrumbs={breadcrumbs}
                title={formattedSlug}
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
                    {isLoading ? (
                        <RecipeCardSkeleton count={3} />
                    ) : (
                        isError ? (
                            <Error size="perfect" msg="Something went wrong" />
                        ) : (
                            recipes.length === 0 ? (
                                <NoData size="perfect" msg="No recipes found" />
                            ) : (
                                recipes.map(recipe => (
                                    <RecipeCard
                                        key={recipe._id}
                                        recipe={recipe}
                                        from={formattedSlug}
                                        fromPath={`/category/${category}`}
                                        showCartButton={true}
                                    />
                                ))
                            )
                        )
                    )}
                </div>
            </PageLayout>
        </>
    );
};

export default Category;