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
import { CalendarIcon, Lock } from "lucide-react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const accountSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    email: z.string().email(),
    phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
    dateOfBirth: z.date({
        required_error: "A date of birth is required.",
    }),
});

const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    dateOfBirth: new Date("1990-01-01"),
}

const EditAccount = () => {
    // TODO: Fetch user data and populate defaultValues
    const form = useForm({
        resolver: zodResolver(accountSchema),
        defaultValues: {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            dateOfBirth: userData.dateOfBirth,
        },
    });

    const onSubmit = (data) => {
        const formattedData = {
            ...data,
            dateOfBirth: format(data.dateOfBirth, "yyyy-MM-dd"),
        };
        console.log(formattedData);
    };

    const handleCalendarChange = (
        _value,
        _e
    ) => {
        const _event = {
            target: {
                value: String(_value),
            },
        }
        _e(_event)
    }

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
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                                                className="rounded-md border p-2"
                                                classNames={{
                                                    month_caption: "mx-0",
                                                }}
                                                captionLayout="dropdown"
                                                defaultMonth={field.value || new Date()}
                                                fromYear={1900}
                                                toYear={new Date().getFullYear()}
                                                hideNavigation
                                                components={{
                                                    DropdownNav: (props) => {
                                                        return (
                                                            <div className="flex w-full items-center gap-2">
                                                                {props.children}
                                                            </div>
                                                        )
                                                    },
                                                    Dropdown: (props) => {
                                                        return (
                                                            <Select
                                                                value={String(props.value)}
                                                                onValueChange={(value) => {
                                                                    if (props.onChange) {
                                                                        handleCalendarChange(value, props.onChange)
                                                                    }
                                                                }}
                                                            >
                                                                <SelectTrigger className="h-8 w-fit font-medium first:grow">
                                                                    <SelectValue />
                                                                </SelectTrigger>
                                                                <SelectContent className="max-h-[min(26rem,var(--radix-select-content-available-height))]">
                                                                    {props.options?.map((option) => (
                                                                        <SelectItem
                                                                            key={option.value}
                                                                            value={String(option.value)}
                                                                            disabled={option.disabled}
                                                                        >
                                                                            {option.label}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                        )
                                                    },
                                                }}
                                            />
                                        </PopoverContent>
                                    </Popover>
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