import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";

const Help = () => {
    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Help' },
    ]
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="Help"
            />
            <PageLayout paddingSize="compact">
                
            </PageLayout>
        </div>
    );
};

export default Help;