import PageLayout from '@/app/layout/PageLayout';
import { Slice, UtensilsCrossed, Cake, Wine, Leaf } from 'lucide-react';
import Title from '../ui/Title';
import { Link } from 'react-router-dom';

const categories = [
    {
        name: 'Breakfast',
        icon: <Slice className="w-12 h-12" />
    },
    {
        name: 'Lunches',
        icon: <UtensilsCrossed className="w-12 h-12" />
    },
    {
        name: 'Desserts',
        icon: <Cake className="w-12 h-12" />
    },
    {
        name: 'Appetizer',
        icon: <Wine className="w-12 h-12" />
    },
    {
        name: 'Salads',
        icon: <Leaf className="w-12 h-12" />
    },
];

const TopCategories = () => {
    return (
        <PageLayout>
            <div className="text-center mb-12">
                <Title title="Our Top Categories" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                {categories.map((category) => (
                    <Link
                        to={`/category/${category.name.toLowerCase()}`}
                        key={category.name}
                        className="bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                    >
                        <div className="bg-white w-24 h-24 flex items-center justify-center rounded-full transform group-hover:scale-110 transition-transform duration-300">
                            <div className="text-primary">
                                {category.icon}
                            </div>
                        </div>
                        <p className="mt-5 text-lg font-semibold text-primary dark:text-foreground">
                            {category.name}
                        </p>
                    </Link>
                ))}
            </div>
        </PageLayout>
    );
};

export default TopCategories;
