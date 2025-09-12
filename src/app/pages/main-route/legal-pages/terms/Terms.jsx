import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";

const Terms = () => {
    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Terms' },
    ]
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="Terms"
            />
            <PageLayout paddingSize="compact">
                
            </PageLayout>
        </div>
    );
};

export default Terms;