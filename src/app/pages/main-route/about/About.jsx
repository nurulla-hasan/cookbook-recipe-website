import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import { replaceWhiteBackground } from "@/lib/utils";

const About = () => {
    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'About' },
    ];

    const about = "<h2>You can add any text from your dashboard.</h2>";
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="About"
            />
            <PageLayout paddingSize="compact">
                <div dangerouslySetInnerHTML={{ __html: replaceWhiteBackground(about) }} />
            </PageLayout>
        </div>
    );
};

export default About;