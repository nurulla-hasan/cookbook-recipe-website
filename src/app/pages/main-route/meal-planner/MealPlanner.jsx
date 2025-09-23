import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import WeeklyMealPlan from "@/components/meal-planner/WeeklyMealPlan";
import PlanTypeFilter from "@/components/meal-planner/PlanTypeFilter";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetCustomMealPlanQuery, useGetFeaturedMealPlanQuery, useGetMealPlanDetailsQuery, useGetWeeklyMealPlanQuery } from "@/redux/feature/meal-plan/mealPlanApi";
import { useSelector } from "react-redux";

const MealPlanner = () => {
    useGetWeeklyMealPlanQuery()
    useGetFeaturedMealPlanQuery()
    useGetCustomMealPlanQuery()
    const weekDropDown = useSelector((state) => state.mealPlan.weeklyDropDown);
    const featuredDropDown = useSelector((state) => state.mealPlan.featuredDropDown);
    const customDropDown = useSelector((state) => state.mealPlan.customDropDown);

    const [activeTab, setActiveTab] = useState("my-weeks");
    const [selectedWeek, setSelectedWeek] = useState();
    const [selectedPlan, setSelectedPlan] = useState();
    const [selectedCustomPlan, setSelectedCustomPlan] = useState();
    const [activeMealPlanId, setActiveMealPlanId] = useState();

    const { data: mealPlanDetailsResponse } = useGetMealPlanDetailsQuery(activeMealPlanId, { skip: !activeMealPlanId });
    const mealPlanDetails = mealPlanDetailsResponse?.data;

    useEffect(() => {
        if (activeTab === 'my-weeks') {
            setActiveMealPlanId(selectedWeek?._id);
        } else if (activeTab === 'featured-plans') {
            setActiveMealPlanId(selectedPlan?._id);
        } else if (activeTab === 'custom-plans') {
            setActiveMealPlanId(selectedCustomPlan?._id);
        }
    }, [activeTab, selectedWeek, selectedPlan, selectedCustomPlan]);

    useEffect(() => {
        if (weekDropDown && weekDropDown.length > 0 && !selectedWeek) {
            setSelectedWeek(weekDropDown[0]);
        }
    }, [weekDropDown, selectedWeek]);

    useEffect(() => {
        if (featuredDropDown && featuredDropDown.length > 0 && !selectedPlan) {
            setSelectedPlan(featuredDropDown[0]);
        }
    }, [featuredDropDown, selectedPlan]);

    useEffect(() => {
        if (customDropDown && customDropDown.length > 0 && !selectedCustomPlan) {
            setSelectedCustomPlan(customDropDown[0]);
        }
    }, [customDropDown, selectedCustomPlan]);

    const breadcrumbs = [
        { name: "Home", href: "/" },
        { name: "Meal Planner" },
    ];
    return (
        <>
            <PageHeader breadcrumbs={breadcrumbs} title="Meal Planner" />
            <PageLayout paddingSize="compact">
                <div className="space-y-8">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <TabsList className="grid grid-cols-3">
                                <TabsTrigger value="my-weeks">My Weeks</TabsTrigger>
                                <TabsTrigger value="featured-plans">Featured Plans</TabsTrigger>
                                <TabsTrigger value="custom-plans">Custom Plans</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="my-weeks">
                            <div className="mt-4">
                                <PlanTypeFilter
                                    title="Select Week"
                                    items={weekDropDown || []}
                                    value={selectedWeek}
                                    onValueChange={setSelectedWeek}
                                />
                            </div>
                            <div className="mt-8">
                                <WeeklyMealPlan mealPlan={mealPlanDetails || {}} />
                            </div>
                        </TabsContent>
                        <TabsContent value="featured-plans">
                            <div className="mt-4">
                                <PlanTypeFilter
                                    title="Select Featured Plan"
                                    items={featuredDropDown || []}
                                    value={selectedPlan}
                                    onValueChange={setSelectedPlan}
                                />
                            </div>
                            <div className="mt-8">
                                <WeeklyMealPlan mealPlan={mealPlanDetails || {}} />
                            </div>
                        </TabsContent>
                        <TabsContent value="custom-plans">
                            <div className="mt-4">
                                <PlanTypeFilter
                                    title="Select Custom Plan"
                                    items={customDropDown || []}
                                    value={selectedCustomPlan}
                                    onValueChange={setSelectedCustomPlan}
                                />
                            </div>
                            <div className="mt-8">
                                <WeeklyMealPlan mealPlan={mealPlanDetails || {}} />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </PageLayout>
        </>
    );
};

export default MealPlanner;