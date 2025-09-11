import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditAccount from "@/components/account/edit-account/EditAccount";
import ChangePassword from "@/components/account/chagePassword/ChangePassword";

const MyAccount = () => {
    const [activeTab, setActiveTab] = useState("account");

    const [formData, setFormData] = useState({
        name: "Mr. Mike",
        email: "mike@example.com",
        phone: "+1 234 567 890",
        dateOfBirth: new Date(1990, 0, 1),
        language: "English",
        timezone: "(GMT-12:00) International Date Line West"
    });

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Sidebar */}
                <div className="w-full md:w-64 space-y-4">
                    <Card className="shadow-none bg-transparent border">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center space-y-4">
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">{formData.name}</h2>
                                    <p className="text-sm font-normal">{formData.email}</p>
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
                        orientation="vertical"
                    >
                        <TabsList className="flex flex-col items-start h-auto p-0 bg-transparent">
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