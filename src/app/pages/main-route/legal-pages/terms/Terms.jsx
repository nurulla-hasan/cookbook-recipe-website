import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import { replaceWhiteBackground } from "@/lib/utils";
import { useGetTermsQuery } from "@/redux/feature/legal/legalApi";

const Terms = () => {

    const { data } = useGetTermsQuery()
    const terms = data?.data?.description
    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Terms' },
    ];

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