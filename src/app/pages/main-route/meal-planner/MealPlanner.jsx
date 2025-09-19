import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import WeeklyMealPlan from "@/components/meal-planner/WeeklyMealPlan";
import PlanTypeFilter from "@/components/meal-planner/PlanTypeFilter";
import { useState } from "react";
import { 
    weeklyPlans, 
    simpleStarterPlans, 
    preparations, 
    allMealPlans
} from "@/lib/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GlobalMenu from "@/components/meal-planner/GlobalMenu";

const MealPlanner = () => {
    const breadcrumbs = [
        { name: "Home", href: "/" },
        { name: "Meal Planner" },
    ];

    const [activeTab, setActiveTab] = useState("my-weeks");
    const [selectedWeek, setSelectedWeek] = useState(weeklyPlans[0]);
    const [selectedPlan, setSelectedPlan] = useState(simpleStarterPlans[0]);
    const [selectedCustomPlan, setSelectedCustomPlan] = useState(undefined);
    const [selectedPreparation, setSelectedPreparation] = useState(preparations[0]);
    
    const customPlans = Object.keys(allMealPlans["custom-plans"]);

    return (
        <>
            <PageHeader breadcrumbs={breadcrumbs} title="Meal Planner" />
            <PageLayout paddingSize="compact">
                <div className="space-y-8">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <TabsList className="grid grid-cols-3">
                                <TabsTrigger value="my-weeks">My Weeks</TabsTrigger>
                                <TabsTrigger value="starter-plans">Starter Plans</TabsTrigger>
                                <TabsTrigger value="custom-plans">Custom Plans</TabsTrigger>
                            </TabsList>
                            <GlobalMenu
                                preparations={preparations}
                                selectedPreparation={selectedPreparation}
                                setSelectedPreparation={setSelectedPreparation}
                            />
                        </div>

                        <TabsContent value="my-weeks">
                            <div className="mt-4">
                                <PlanTypeFilter
                                    title="Select Week"
                                    items={weeklyPlans}
                                    value={selectedWeek}
                                    onValueChange={setSelectedWeek}
                                />
                            </div>
                            <div className="mt-8">
                                <WeeklyMealPlan mealPlan={allMealPlans["my-weeks"][selectedWeek] || {}} />
                            </div>
                        </TabsContent>
                        <TabsContent value="starter-plans">
                            <div className="mt-4">
                                <PlanTypeFilter
                                    title="Select Starter Plan"
                                    items={simpleStarterPlans}
                                    value={selectedPlan}
                                    onValueChange={setSelectedPlan}
                                />
                            </div>
                            <div className="mt-8">
                                <WeeklyMealPlan mealPlan={allMealPlans["starter-plans"][selectedPlan] || {}} />
                            </div>
                        </TabsContent>
                        <TabsContent value="custom-plans">
                            <div className="mt-4">
                                <PlanTypeFilter
                                    title="Select Custom Plan"
                                    items={customPlans}
                                    value={selectedCustomPlan}
                                    onValueChange={setSelectedCustomPlan}
                                />
                            </div>
                             <div className="mt-8">
                                <WeeklyMealPlan mealPlan={allMealPlans["custom-plans"][selectedCustomPlan] || {}} />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </PageLayout>
        </>
    );
};

export default MealPlanner;