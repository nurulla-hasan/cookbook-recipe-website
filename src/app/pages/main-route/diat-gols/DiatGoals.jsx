import PageLayout from '@/app/layout/PageLayout';
import PageHeader from '@/components/common/page-header/PageHeader';
import { useParams } from 'react-router-dom';
import { mockRecipes } from '@/lib/mockData';
import { useState } from 'react';
import RecipeCard from '@/components/Recipes/recipe-card/RecipeCard';

const DiatGoals = () => {
    const [recipes] = useState(mockRecipes);
    const { slug: diatGols } = useParams();
    console.log(diatGols);
    const formattedSlug = diatGols.charAt(0).toUpperCase() + diatGols.slice(1);

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
                    {recipes.filter(recipe => recipe.category.toLowerCase() === diatGols).map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} from={formattedSlug} fromPath={`/diat-gols/${diatGols}`} showCartButton={true} />
                    ))}
                </div>
            </PageLayout>
        </>
    );
};

export default DiatGoals;