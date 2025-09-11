
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import PageHeader from '@/components/common/page-header/PageHeader';
import ProfileSidebar from '@/components/common/sidebar/ProfileSidebar';

const Profilelayout = () => {
    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Profile' },
    ];
    return (
        <>
            <Navbar />
            <div className='body-height'>
                <PageHeader
                    title="My Profile"
                    breadcrumbs={breadcrumbs}
                />
                <div className="container mx-auto py-4 px-4 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Desktop Sidebar */}
                        <div className="hidden md:block md:col-span-1">
                            <ProfileSidebar />
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-3">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profilelayout;
