
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Reviews from "../reviews/Reviews";
import Score from "../satiety-score/Score";

const DetailsTabs = ({ recipe }) => {
    return (
        <>
            <Tabs defaultValue="description" className="w-full mt-8">
                <TabsList className="border-b justify-start gap-4 rounded-none bg-transparent p-0">
                    <TabsTrigger value="description" className="border-0 data-[state=active]:border-b data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground h-auto rounded-none px-4 py-2 text-sm">Description</TabsTrigger>
                    <TabsTrigger value="reviews" className="border-0 data-[state=active]:border-b data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground h-auto rounded-none px-4 py-2 text-sm">Reviews</TabsTrigger>
                    <TabsTrigger value="satiety-score" className="border-0 data-[state=active]:border-b data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground h-auto rounded-none px-4 py-2 text-sm">Satiety Score</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-6">
                    {/* Ingredients */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
                        <ul className="space-y-3  list-disc list-inside">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div>
                        <h3 className="text-xl font-semibold  mb-4">Instructions</h3>
                        <ol className="space-y-4 ">
                            {recipe.instructions.map((step, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="pt-1">{step.split(': ')[1]}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </TabsContent>
                <TabsContent value="reviews" className="mt-6">
                    <Reviews recipe={recipe} />
                </TabsContent>
                <TabsContent value="satiety-score" className="mt-6">
                    <Score recipe={recipe} />
                </TabsContent>
            </Tabs>
        </>
    );
};

export default DetailsTabs;