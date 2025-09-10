import React, { useState } from "react";
import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import RecipeCard from "@/components/Recipes/recipe-card/RecipeCard";
import FilterModal from "@/components/Recipes/filter-modal/FilterModal";

const mockRecipes = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop',
        category: 'Lunches',
        title: 'Five-Spice Sweet Potato & Broccoli Stew',
        duration: '40 min',
        rating: 4.8,
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1470&auto=format&fit=crop',
        category: 'Desserts',
        title: 'Pudding',
        duration: '40 min',
        rating: 4.8,
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop',
        category: 'Breakfast',
        title: 'Tropical Protein Smoothie',
        duration: '40 min',
        rating: 4.8,
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
        category: 'Salads',
        title: 'Egg & Vegetable Salad',
        duration: '40 min',
        rating: 4.8,
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop',
        category: 'Lunches',
        title: 'Spicy Chicken Stir-fry',
        duration: '35 min',
        rating: 4.5,
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1470&auto=format&fit=crop',
        category: 'Desserts',
        title: 'Chocolate Mousse',
        duration: '20 min',
        rating: 4.9,
    },
];

const Recipes = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState({});
    const [recipes] = useState(mockRecipes);

    console.log('Applied Filters:', appliedFilters);

    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Recipes' },
    ];

    const handleApplyFilters = (filters) => {
        setAppliedFilters(filters);
        // In a real app, you would filter the recipes based on these filters
        console.log('Applied Filters:', filters);
    };

    const handleClearFilters = () => {
        setAppliedFilters({});
        // In a real app, you would reset the recipes to original list
        console.log('Filters Cleared');
    };

    return (
        <>
            <PageHeader
                title="Recipes"
                breadcrumbs={breadcrumbs}
            />
            <PageLayout>
                {/* Title and Search/Filter */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground/80">All Recipes</h2>
                        <p className="text-muted-foreground">Discover and explore delicious recipes</p>
                    </div>
                    <div className="w-full md:w-auto flex items-center gap-3">
                        <div className="relative flex-grow md:flex-grow-0 md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search recipes..."
                                className="w-full pl-9 pr-4 h-9 text-sm bg-background"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-9 px-3"
                            onClick={() => setIsFilterModalOpen(true)}
                        >
                            <SlidersHorizontal className="w-4 h-4 mr-2" />
                            Filters
                        </Button>
                    </div>
                </div>

                {/* Recipe List */}
                <div className="grid gap-6 grid-cols-1">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </PageLayout>

            {/* Filter Modal */}
            <FilterModal
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
                onApplyFilters={handleApplyFilters}
                onClearFilters={handleClearFilters}
            />
        </>
    );
};

export default Recipes;