import PageLayout from '@/tools/PageLayout';
import Title from '../ui/Title';
import { Link } from 'react-router-dom';
import { useGetCategoryDropDownQuery } from '@/redux/feature/category/category';
import { Skeleton } from '../ui/skeleton';

const TopCategories = () => {
    const { data: categoriesData, isLoading } = useGetCategoryDropDownQuery();
    const categories = categoriesData?.data || [];

    return (
        <section id='category'>
            <PageLayout>
                <div className="text-center mb-12">
                    <Title title="Our Top Categories" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                    {isLoading ? (
                        Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="flex flex-col items-center space-y-4">
                                <Skeleton className="w-24 h-24 rounded-full" />
                                <Skeleton className="h-6 w-20" />
                            </div>
                        ))
                    ) : (
                        categories.map((category) => (
                            <Link
                                to={`/category/${category._id}?name=${encodeURIComponent(category.name)}`}
                                key={category._id}
                                className="bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                            >
                                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-full overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                                    <img 
                                        src={category.image} 
                                        alt={category.name} 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://placehold.co/100x100?text=Category';
                                        }}
                                    />
                                </div>
                                <p className="mt-5 text-lg font-semibold text-primary dark:text-foreground text-center"> 
                                    {category.name}
                                </p>
                            </Link>
                        ))
                    )}
                </div>
            </PageLayout>
        </section>
    );
};

export default TopCategories;
