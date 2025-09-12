import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";

const Privacy = () => {
    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Privacy' },
    ]
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="Privacy"
            />
            <PageLayout paddingSize="compact">
                
            </PageLayout>
        </div>
    );
};

export default Privacy;