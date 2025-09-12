import React, { useState } from "react";
import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import RecipeCard from "@/components/Recipes/recipe-card/RecipeCard";
import FilterModal from "@/components/Recipes/filter-modal/FilterModal";
import {mockRecipes} from "@/lib/mockData";

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
            <PageLayout paddingSize="compact">
                {/* Title and Search/Filter */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold ">All Recipes</h2>
                        <p className="text-muted-foreground">Discover and explore delicious recipes</p>
                    </div>
                    <div className="w-full md:w-auto flex items-center gap-3">
                        <div className="relative flex-grow md:flex-grow-0 md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search recipes..."
                                className="w-full pl-9 pr-4 text-sm bg-background"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button
                            variant="outline"
                            onClick={() => setIsFilterModalOpen(true)}
                        >
                            <SlidersHorizontal />
                            Filters
                        </Button>
                    </div>
                </div>

                {/* Recipe List */}
                <div className="grid gap-6 grid-cols-1">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} from="Recipes" fromPath="/recipes" showCartButton={true} />
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