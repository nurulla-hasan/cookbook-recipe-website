import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import GroceryRecipeCard from "@/components/grocery/GroceryRecipeCard";
import { groceryRecipes } from "@/lib/mockData";

const Grocery = () => {
    const breadcrumbs = [
        { name: "Home", href: "/" },
        { name: "Grocery" },
    ];

    return (
        <>
            <PageHeader breadcrumbs={breadcrumbs} title="Grocery" />
            <PageLayout>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="md:col-span-2">
                        <Tabs defaultValue="aisle" className="w-full">
                            <TabsList className="mb-6 w-full">
                                <TabsTrigger
                                    value="aisle"
                                    className="w-full px-4 py-2 text-sm rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                                >
                                    By AISLE
                                </TabsTrigger>
                                <TabsTrigger
                                    value="recipe"
                                    className="w-full px-4 py-2 text-sm rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                                >
                                    By RECIPE
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="aisle" className="space-y-8">
                                {groceryRecipes.map((recipe, index) => (
                                    <GroceryRecipeCard
                                        key={`aisle-${index}`}
                                        image={recipe.image}
                                        title={recipe.title}
                                        subtitle={recipe.subtitle}
                                        ingredients={recipe.ingredients}
                                    />
                                ))}
                            </TabsContent>

                            <TabsContent value="recipe" className="space-y-8">
                                {groceryRecipes.map((recipe, index) => (
                                    <GroceryRecipeCard
                                        key={`recipe-${index}`}
                                        image={recipe.image}
                                        title={recipe.title}
                                        subtitle={recipe.subtitle}
                                        ingredients={recipe.ingredients}
                                    />
                                ))}
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Right Section */}
                    <div className="md:col-span-1 flex justify-center items-start">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                            BUY ON AMAZON FRESH
                        </Button>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};

export default Grocery;