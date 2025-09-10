import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";

const MealPlanner = () => {
    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Meal Planner' },
    ];
    return (
        <>
            <PageHeader
                breadcrumbs={breadcrumbs}
                title="Meal Planner" />
            <PageLayout>
            </PageLayout>
        </>
    );
};

export default MealPlanner;