import PageLayout from "@/tools/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import LegalSkeleton from "@/components/skeleton/legal/LegalSkeleton";
import Error from "@/components/common/error/Error";
import { replaceWhiteBackground } from "@/lib/utils";
import { useGetTermsQuery } from "@/redux/feature/legal/legalApi";
import NoData from "@/components/common/no-data/NoData";

const Terms = () => {
    const { data, isLoading, isError } = useGetTermsQuery()
    const terms = data?.data?.description

    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Terms' },
    ];

    if (isLoading) {
        return <LegalSkeleton />;
    }
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="Terms"
            />
            <PageLayout paddingSize="compact">
            {
                    isError ? (
                        <Error msg="Something went wrong" />
                    ) : terms === null || terms === undefined ? (
                        <NoData msg="No data found" />
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: replaceWhiteBackground(terms) }} />
                    )
                }
            </PageLayout>
        </div>
    );
};

export default Terms;