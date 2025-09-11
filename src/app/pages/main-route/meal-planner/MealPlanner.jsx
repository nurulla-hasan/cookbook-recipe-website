import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import DayView from "@/components/meal-planner/DayView";
import FilterBar from "@/components/meal-planner/FilterBar";

const MealPlanner = () => {
    const breadcrumbs = [
        { name: "Home", href: "/" },
        { name: "Meal Planner" },
    ];

    const weeklyPlans = [
        "This Week",
        "Next week",
        "2nd Week",
        "3rd Week",
        "4th Week",
        "5th Week",
        "6th Week",
    ];
    const simpleStarterPlans = [
        "Plant-Based On a Budget $3 a Meal",
        "Plant-Based On a Budget $3 a Meal for Weekend",
    ];
    const preparations = [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Dessert",
        "Salad",
        "Snacks",
    ];
    const menuOptions = [
        "Reset Plan",
        "Clean Plan",
        "Print plan",
        "Download plan",
        "Save as Custom Plan",
    ];

    const days = ["DAY 1", "DAY 2", "DAY 3", "DAY 4", "DAY 5", "DAY 6", "DAY 7"];

    return (
        <>
            <PageHeader breadcrumbs={breadcrumbs} title="Meal Planner" />
            <PageLayout paddingSize="compact">
                <div className="space-y-8">
                    <FilterBar 
                        weeklyPlans={weeklyPlans}
                        simpleStarterPlans={simpleStarterPlans}
                        preparations={preparations}
                        menuOptions={menuOptions}
                    />
                    <div className="space-y-6">
                        {days.map((day) => (
                            <DayView key={day} day={day} />
                        ))}
                    </div>
                </div>
            </PageLayout>
        </>
    );
};

export default MealPlanner;