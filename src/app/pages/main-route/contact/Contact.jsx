import PageLayout from "@/app/layout/PageLayout";
import PageHeader from "@/components/common/page-header/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowBigRight, Mail, MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import contactImage from '../../../../assets/contact.png';
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactInfo } from "@/lib/mockData";

const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
        message: "Invalid email address",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 characters",
    }),
    message: z.string().min(20, {
        message: "Message must be at least 20 characters",
    }),
});



const Contact = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            phone: "",
            message: "",
        },
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const breadcrumb = [
        { name: 'Home', href: '/' },
        { name: 'Contact' },
    ]
    return (
        <div>
            <PageHeader
                breadcrumbs={breadcrumb}
                title="Contact"
            />
            <PageLayout paddingSize="compact">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-title mb-4">Contact Info</h2>
                    <p className="text-base text-subtitle mb-8">
                        Get in touch with our team for legal support, inquiries, or consultation appointments.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start p-4 rounded-lg shadow-sm border">
                            <MapPin className="w-6 h-6 mr-3 text-primary mt-1" />
                            <div>
                                <p className="text-sm font-medium text-title">Location:</p>
                                <p className="text-sm text-subtitle">{contactInfo.address || "Address not available"}</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 rounded-lg shadow-sm border">
                            <Mail className="w-6 h-6 mr-3 text-primary mt-1" />
                            <div>
                                <p className="text-sm font-medium text-title">Email:</p>
                                <p className="text-sm text-subtitle">{contactInfo.email || "Email not available"}</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 rounded-lg shadow-sm border">
                            <Phone className="w-6 h-6 mr-3 text-primary mt-1" />
                            <div>
                                <p className="text-sm font-medium text-title">Phone:</p>
                                <p className="text-sm text-subtitle">{contactInfo.phone || "Phone not available"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-12 items-start">
                    <div className="h-full border p-4 rounded-lg relative">
                        <h2 className="text-2xl font-bold text-title mb-6">Contact Us</h2>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your phone" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Enter your message" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="flex items-center gap-2 md:absolute bottom-4 right-4"
                                >
                                    Submit <ArrowBigRight />
                                </Button>
                            </form>
                        </Form>

                    </div>
                    <div className="mt-8 md:mt-0 min-h-full">
                        <img
                            src={contactImage}
                            alt="Contact Us"
                            className="rounded-lg w-[600px] h-[400px] object-cover"
                        />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default Contact;