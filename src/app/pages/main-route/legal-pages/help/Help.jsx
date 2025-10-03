import PageLayout from "@/tools/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import { replaceWhiteBackground } from "@/lib/utils";
import { useGetHelpQuery } from "@/redux/feature/legal/legalApi";
import React from "react";
import LegalSkeleton from "@/components/skeleton/legal/LegalSkeleton";
import Error from "@/components/common/error/Error";
import NoData from "@/components/common/no-data/NoData";
const Help = () => {

    const { data, isLoading, isError } = useGetHelpQuery()
    const help = data?.data?.description
    
    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Help' },
    ];

    if (isLoading) {
        return <LegalSkeleton />;
    }
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="Help"
            />
            <PageLayout paddingSize="compact">
                {isError ? (
                    <Error msg="Something went wrong" />
                ) : help === null || help === undefined ? (
                    <NoData msg="No data found" />
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: replaceWhiteBackground(help) }} />
                )}
            </PageLayout>
        </div>
    );
};

export default Help;