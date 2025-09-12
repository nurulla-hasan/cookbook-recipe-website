import PageLayout from '@/app/layout/PageLayout';
import PageHeader from '@/components/common/page-header/PageHeader';
import React from 'react';

const Cart = () => {

    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Cart' },
    ];
    return (
        <>
            <PageHeader
                title="Cart"
                breadcrumbs={breadcrumbs} />
            <PageLayout>

            </PageLayout>
        </>
    );
};

export default Cart;