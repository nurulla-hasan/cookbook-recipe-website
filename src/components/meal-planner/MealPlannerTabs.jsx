import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlanTypeFilter from "./PlanTypeFilter";

const MealPlannerTabs = ({
    activeTab,
    setActiveTab,
    weeklyPlans,
    simpleStarterPlans,
    selectedWeek,
    setSelectedWeek,
    selectedPlan,
    setSelectedPlan,
    selectedCustomPlan,
    setSelectedCustomPlan,
}) => {
    // Simplified custom plans for Select component
    const customPlans = [
        "My Plan",
        "Day 1",
        "Next week",
    ];

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="my-weeks">My Weeks</TabsTrigger>
                <TabsTrigger value="starter-plans">Starter Plans</TabsTrigger>
                <TabsTrigger value="custom-plans">Custom Plans</TabsTrigger>
            </TabsList>

            <div className="mt-4">
                <TabsContent value="my-weeks" className="w-full m-0">
                    <PlanTypeFilter
                        title="Select Week"
                        items={weeklyPlans}
                        value={selectedWeek}
                        onValueChange={setSelectedWeek}
                    />
                </TabsContent>
                <TabsContent value="starter-plans" className="w-full m-0">
                    <PlanTypeFilter
                        title="Select Starter Plan"
                        items={simpleStarterPlans}
                        value={selectedPlan}
                        onValueChange={setSelectedPlan}
                    />
                </TabsContent>
                <TabsContent value="custom-plans" className="w-full m-0">
                    <PlanTypeFilter
                        title="Select Custom Plan"
                        items={customPlans}
                        value={selectedCustomPlan}
                        onValueChange={setSelectedCustomPlan}
                    />
                </TabsContent>
            </div>
        </Tabs>
    );
};

export default MealPlannerTabs;