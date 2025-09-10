
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import PageHeader from '@/components/common/page-header/PageHeader';
import ProfileSidebar from '@/components/common/sidebar/ProfileSidebar';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

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
                <div className="container mx-auto py-8 px-4 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Mobile Sidebar (Sheet) */}
                        <div className="md:hidden mb-4">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" className="flex items-center gap-2">
                                        <Menu className="w-5 h-5" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left">
                                    <SheetHeader>
                                        <SheetTitle>Menu</SheetTitle>
                                    </SheetHeader>
                                    <SheetDescription className="sr-only">Menu</SheetDescription>
                                    <ProfileSidebar />
                                </SheetContent>
                            </Sheet>
                        </div>

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
