import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";

const Grocery = () => {
    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Grocery' },
    ];
    return (
        <>
            <PageHeader
                breadcrumbs={breadcrumbs}
                title="Grocery"
            />
            <PageLayout>
            </PageLayout>
        </>
    );
};

export default Grocery;