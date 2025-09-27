import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditAccount from "@/components/account/edit-account/EditAccount";
import ChangePassword from "@/components/account/chagePassword/ChangePassword";
import { useGetUserProfileQuery } from "@/redux/feature/profile/profileApi";
import { useSelector } from "react-redux";
import { getInitials } from "@/lib/utils";

const MyAccount = () => {
    const [activeTab, setActiveTab] = useState("account");

    const { isLoading } = useGetUserProfileQuery();
    console.log(isLoading);
    const user = useSelector((state) => state.profile.userProfile);

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone_number || "",
        dateOfBirth: user?.dateOfBirth || "",
        // language: user?.language || "",
        // timezone: user?.timezone || ""
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone_number || "",
                dateOfBirth: user.dateOfBirth || null,
                // language: user.language || "",
                // timezone: user.timezone || ""
            });
        }
    }, [user]);

    return (
        <div className="lg:py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Sidebar */}
                <div className="w-full lg:w-64 space-y-4">
                    <Card className="shadow-none bg-transparent border">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center space-y-4">
                                <Avatar className="h-24 w-24 border">
                                    <AvatarImage src={user?.profile_image} />
                                    <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">{user?.name}</h2>
                                    <p className="text-sm font-normal">{user?.email}</p>
                                </div>
                                <Button variant="outline" className="w-full">
                                    Change Photo
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Tabs 
                        value={activeTab} 
                        onValueChange={setActiveTab}
                        className="w-full"
                        orientation="horizontal"
                    >
                        <TabsList className="flex items-center h-auto bg-transparent border p-0.5">
                            <TabsTrigger 
                                value="account" 
                                className="w-full justify-start data-[state=active]:bg-accent data-[state=active]:shadow-none"
                            >
                                Account
                            </TabsTrigger>
                            <TabsTrigger 
                                value="security" 
                                className="w-full justify-start data-[state=active]:bg-accent data-[state=active]:shadow-none"
                            >
                                Security
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                {/* Right Content */}
                <div className="flex-1">
                    <Tabs value={activeTab} className="w-full">
                        {/* Account Tab */}
                        <TabsContent value="account">
                            <EditAccount formData={formData} setFormData={setFormData} />
                        </TabsContent>

                        {/* Security Tab */}
                        <TabsContent value="security">
                            <ChangePassword />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;