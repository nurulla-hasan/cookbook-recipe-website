import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import { replaceWhiteBackground } from "@/lib/utils";

const Terms = () => {
    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Terms' },
    ];

    const terms = "<h2>You can add any text from your dashboard.</h2>";
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="Terms"
            />
            <PageLayout paddingSize="compact">
                <div dangerouslySetInnerHTML={{ __html: replaceWhiteBackground(terms) }} />
            </PageLayout>
        </div>
    );
};

export default Terms;