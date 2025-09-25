import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import { replaceWhiteBackground } from "@/lib/utils";
import { useGetPrivacyPolicyQuery } from "@/redux/feature/legal/legalApi";

const Privacy = () => {

    const { data } = useGetPrivacyPolicyQuery()
    const privacy = data?.data?.description

    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Privacy' },
    ];
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