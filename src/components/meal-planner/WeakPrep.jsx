import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle2, Circle, Info } from "lucide-react";
import { useSelector } from "react-redux";
import { useGetWeekendPrepQuery, useToggleSpeedPrepMutation } from "@/redux/feature/meal-plan/mealPlanApi";
import { cn } from "@/lib/utils";
import NoData from "@/components/common/no-data/NoData";
import Error from "@/components/common/error/Error";
import { Skeleton } from "@/components/ui/skeleton";

const WeakPrep = () => {
    const { planId } = useSelector((state) => state.addMealPlan);
    const { data: prepResponse, isLoading, isError, error } = useGetWeekendPrepQuery(planId, { skip: !planId });
    const [toggleSpeedPrep] = useToggleSpeedPrepMutation();

    const prepData = prepResponse?.data;
    const errorMessage = error?.data?.message || error?.message || "";
    const noRecipeError = isError && (errorMessage === "No recipes found in this plan!" || errorMessage.includes("No recipes found"));

    const handleToggleStep = async (stepId) => {
        try {
            await toggleSpeedPrep({ planId, stepId }).unwrap();
        } catch {
            // console.error("Failed to toggle step:", error);
        }
    };

    if (isLoading) {
        return (
            <div className="space-y-6">
                <Skeleton className="h-40 w-full" />
                <div className="grid gap-6 md:grid-cols-2">
                    <Skeleton className="h-60 w-full" />
                    <Skeleton className="h-60 w-full" />
                </div>
            </div>
        );
    }

    if (noRecipeError || (!isLoading && !isError && (!prepData || (!prepData.sections?.length && !prepData.speed_prep?.length)))) {
        return <NoData msg="No weekend preparation steps found for this plan." />;
    }

    if (isError) {
        return <Error msg={errorMessage || "Failed to load weekend prep data"} />;
    }

    if (!planId) {
        return <NoData msg="Please select a meal plan to see weekend preparation steps." />;
    }

    return (
        <div className="space-y-8 pb-10">
            {/* Prep Notes */}
            {prepData.prep_notes?.length > 0 && (
                <Card className="bg-primary/5 border-primary/20 shadow-none">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Info className="w-5 h-5 text-primary" />
                            Preparation Notes
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-1">
                            {prepData.prep_notes.map((note, index) => (
                                <li key={index} className="text-sm text-muted-foreground">{note}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Speed Prep Checklist */}
                {prepData.speed_prep?.length > 0 && (
                    <Card className="shadow-none border">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary" />
                                Speed Prep Checklist
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {prepData.speed_prep.map((item, itemIdx) => (
                                    <div key={itemIdx} className="space-y-3">
                                        <h4 className="font-bold text-md border-b pb-1">{item.ingredient}</h4>
                                        <div className="space-y-2">
                                            {item.steps.map((step) => (
                                                <div 
                                                    key={step._id} 
                                                    className="flex items-start gap-3 p-2 rounded-md transition-colors group hover:bg-muted/50 cursor-pointer"
                                                    onClick={() => handleToggleStep(step._id)}
                                                >
                                                    <div className="mt-0.5">
                                                        {step.isDone ? (
                                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                                        ) : (
                                                            <Circle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                                        )}
                                                    </div>
                                                    <span className={cn(
                                                        "text-sm transition-all duration-300",
                                                        step.isDone ? "line-through text-muted-foreground opacity-60" : "text-foreground"
                                                    )}>
                                                        {step.text}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Sections (Bake, Prep, etc.) */}
                <div className="space-y-6">
                    {prepData.sections?.map((section, secIdx) => (
                        <Card key={secIdx} className="shadow-none border">
                            <CardHeader className="bg-muted/30">
                                <CardTitle className="text-lg uppercase tracking-wider">{section.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-6">
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="space-y-2 last:border-0 border-b pb-4 last:pb-0">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-bold text-primary">{item.name}</h4>
                                            <span className="text-xs font-medium bg-secondary px-2 py-0.5 rounded-full">{item.amount}</span>
                                        </div>
                                        <p className="text-sm font-medium">Instruction: <span className="text-muted-foreground font-normal">{item.instruction}</span></p>
                                        <p className="text-sm font-medium">Storage: <span className="text-muted-foreground font-normal">{item.storage}</span></p>
                                        <div className="pt-1">
                                            <span className="text-[10px] font-bold uppercase text-primary/60 bg-primary/5 px-2 py-0.5 rounded border border-primary/10">Used in: {item.usedIn}</span>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeakPrep;
