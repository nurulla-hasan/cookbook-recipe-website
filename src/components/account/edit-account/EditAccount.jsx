"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, Lock } from "lucide-react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const MEAL_TYPES = ['breakfast', 'lunches-and-dinners', 'appetizers', 'salads', 'soups', 'desserts', 'smoothies/shakes', 'salad-dressings', 'jams/marmalades', 'sides'];
const DIETARY_OPTIONS = ['Gluten-Free', 'Vegan', 'Vegetarian', 'Keto', 'Paleo'];
const HEALTH_GOALS = [
    { value: "weight_loss", label: "Weight Loss" },
    { value: "muscle_gain", label: "Muscle Gain" },
    { value: "maintain_weight", label: "Maintain Weight" },
];

const accountSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    email: z.string().email(),
    phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
    dateOfBirth: z.date({
        required_error: "A date of birth is required.",
    }),
    mail_types: z.array(z.string()).refine(value => value.length > 0, { message: "Please select at least one meal type." }),
    relevant_dielary: z.array(z.string()).optional(),
    helgth_goal: z.string().optional(),
});


const EditAccount = ({ formData, setFormData }) => {
    const form = useForm({
        resolver: zodResolver(accountSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            dateOfBirth: null,
            mail_types: [],
            relevant_dielary: [],
            helgth_goal: "",
        },
    });

    useEffect(() => {
        if (formData) {
            form.reset({
                name: formData.name || "",
                email: formData.email || "",
                phone: formData.phone_number || "",
                dateOfBirth: formData.date_of_birth ? new Date(formData.date_of_birth) : null,
                mail_types: formData.mail_types || [],
                relevant_dielary: formData.relevant_dielary || [],
                helgth_goal: formData.helgth_goal || "",
            });
        }
    }, [formData, form]);

    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            dateOfBirth: data.dateOfBirth ? format(new Date(data.dateOfBirth), "yyyy-MM-dd") : null,
        };
        setFormData(formattedData);
        console.log("Form submitted:", formattedData);
    };

    return (
        <Card className="py-6 bg-transparent border">
            <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                    Update your account information and email address.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input disabled {...field} />
                                                <Lock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                            </div>
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
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dateOfBirth"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Date of Birth</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    defaultMonth={field.value || new Date()}
                                                    fromYear={1900}
                                                    toYear={new Date().getFullYear()}
                                                    captionLayout="dropdown-buttons"
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="helgth_goal"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Health Goal</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your health goal" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {HEALTH_GOALS.map(goal => (
                                                <SelectItem key={goal.value} value={goal.value}>{goal.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="mail_types"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Meal Types</FormLabel>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border rounded-md">
                                        {MEAL_TYPES.map((item) => (
                                            <div key={item} className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(item)}
                                                        onCheckedChange={(checked) => {
                                                            return checked
                                                                ? field.onChange([...(field.value || []), item])
                                                                : field.onChange(
                                                                    field.value?.filter(
                                                                        (value) => value !== item
                                                                    )
                                                                );
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal capitalize">{item.replace(/[-_]/g, ' ')}</FormLabel>
                                            </div>
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="relevant_dielary"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Dietary Preferences</FormLabel>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border rounded-md">
                                        {DIETARY_OPTIONS.map((item) => (
                                            <div key={item} className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(item)}
                                                        onCheckedChange={(checked) => {
                                                            return checked
                                                                ? field.onChange([...(field.value || []), item])
                                                                : field.onChange(
                                                                    field.value?.filter(
                                                                        (value) => value !== item
                                                                    )
                                                                );
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal capitalize">{item.replace(/[-_]/g, ' ')}</FormLabel>
                                            </div>
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end">
                            <Button type="submit">Save Changes</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default EditAccount;