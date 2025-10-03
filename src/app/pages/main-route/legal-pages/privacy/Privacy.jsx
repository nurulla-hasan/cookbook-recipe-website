import PageLayout from "@/tools/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import LegalSkeleton from "@/components/skeleton/legal/LegalSkeleton";
import Error from "@/components/common/error/Error";
import { replaceWhiteBackground } from "@/lib/utils";
import { useGetPrivacyPolicyQuery } from "@/redux/feature/legal/legalApi";
import NoData from "@/components/common/no-data/NoData";

const Privacy = () => {
    const { data, isLoading, isError } = useGetPrivacyPolicyQuery()
    const privacy = data?.data?.description

    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Privacy' },
    ];

    if (isLoading) {
        return <LegalSkeleton />;
    }
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="Privacy"
            />
            <PageLayout paddingSize="compact">
            {
                    isError ? (
                        <Error msg="Something went wrong" />
                    ) : privacy === null || privacy === undefined ? (
                        <NoData msg="No data found" />
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: replaceWhiteBackground(privacy) }} />
                    )
                }
            </PageLayout>
        </div>
    );
};

export default Privacy;