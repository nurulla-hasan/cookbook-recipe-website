import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import { replaceWhiteBackground } from "@/lib/utils";

const Privacy = () => {
    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Privacy' },
    ];

    const privacy = "<h2>You can add any text from your dashboard.</h2>";
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="Privacy"
            />
            <PageLayout paddingSize="compact">
                <div dangerouslySetInnerHTML={{ __html: replaceWhiteBackground(privacy) }} />
            </PageLayout>
        </div>
    );
};

export default Privacy;