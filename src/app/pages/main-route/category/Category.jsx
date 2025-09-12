import PageLayout from '@/app/layout/PageLayout';
import PageHeader from '@/components/common/page-header/PageHeader';
import { useParams } from 'react-router-dom';
import { mockRecipes } from '@/lib/mockData';
import { useState } from 'react';
import RecipeCard from '@/components/Recipes/recipe-card/RecipeCard';

const Category = () => {
    const [recipes] = useState(mockRecipes);
    const { slug: category } = useParams();
    const formattedSlug = category.charAt(0).toUpperCase() + category.slice(1);

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
            <PageLayout paddingSize="compact">
                <div className="grid gap-6 grid-cols-1">
                    {recipes.filter(recipe => recipe.category.toLowerCase() === category).map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} from={formattedSlug} fromPath={`/category/${category}`} showCartButton={true} />
                    ))}
                </div>
            </PageLayout>
        </>
    );
};

export default Category;