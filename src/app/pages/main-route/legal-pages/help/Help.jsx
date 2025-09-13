import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import { replaceWhiteBackground } from "@/lib/utils";

const Help = () => {
    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Help' },
    ];

    const help = "<h2>You can add any text from your dashboard.</h2>";
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="Help"
            />
            <PageLayout paddingSize="compact">
                <div dangerouslySetInnerHTML={{ __html: replaceWhiteBackground(help) }} />
            </PageLayout>
        </div>
    );
};

export default Help;