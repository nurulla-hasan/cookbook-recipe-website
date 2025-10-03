import PageLayout from "@/tools/PageLayout";
import Error from "@/components/common/error/Error";
import PageHeader from "@/components/common/page-header/PageHeader";
import LegalSkeleton from "@/components/skeleton/legal/LegalSkeleton";
import { replaceWhiteBackground } from "@/lib/utils";
import { useGetAboutQuery } from "@/redux/feature/legal/legalApi";
import NoData from "@/components/common/no-data/NoData";

const About = () => {
    const { data, isLoading, isError } = useGetAboutQuery()
    const about = data?.data?.description

    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'About' },
    ];
    
    if (isLoading) {
        return <LegalSkeleton />;
    }
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="About"
            />
            <PageLayout paddingSize="compact">
                {
                    isError ? (
                        <Error msg="Something went wrong" />
                    ) : about === null || about === undefined ? (
                        <NoData msg="No data found" />
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: replaceWhiteBackground(about) }} />
                    )
                }
            </PageLayout>
        </div>
    );
};

export default About;