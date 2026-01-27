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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn, ErrorToast, SuccessToast } from "@/lib/utils";
import { useEffect } from "react";
import { useUpdateUserProfileMutation } from "@/redux/feature/profile/profileApi";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const countries = getCountries().map((country) => ({
    name: en[country],
    code: country,
    callingCode: `+${getCountryCallingCode(country)}`,
}));

const accountSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    email: z.string().email(),
    phone: z.string().min(1, { message: "Phone number is required." }),
    country_name: z.string().min(1, { message: "Country name is required." }),
    country_code: z.string().min(1, { message: "Country code is required." }),
    dateOfBirth: z.date({
        required_error: "A date of birth is required.",
    }).nullable(),
    mail_types: z.array(z.string()).optional(),
    relevant_dielary: z.array(z.string()).optional(),
    helgth_goal: z.string().optional(),
});


const EditAccount = ({ user, newProfileImage }) => {
    const form = useForm({
        resolver: zodResolver(accountSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            country_name: "BD",
            country_code: "+880",
            dateOfBirth: null,
            mail_types: [],
            relevant_dielary: [],
            helgth_goal: "",
        },
    });

    useEffect(() => {
        if (user) {
            const ensureArray = (value) => {
                if (!value) return [];
                if (Array.isArray(value)) return value;
                if (typeof value === 'string') {
                    try {
                        const parsed = JSON.parse(value);
                        return Array.isArray(parsed) ? parsed : [parsed];
                    } catch (e) {
                        console.log(e);
                        return [value];
                    }
                }
                return [value];
            };

            const ensureSingleString = (value) => {
                if (Array.isArray(value)) {
                    return value[0] || "";
                }
                if (typeof value === 'string') {
                    try {
                        const parsed = JSON.parse(value);
                        if (Array.isArray(parsed)) {
                            return parsed[0] || "";
                        }
                    } catch(e) {
                        console.log(e);
                        return value;
                    }
                }
                return value || "";
            }

            form.reset({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone_number || "",
                country_name: user.country_name || "BD",
                country_code: user.country_code || "+880",
                dateOfBirth: user.date_of_birth ? new Date(user.date_of_birth) : null,
                mail_types: ensureArray(user.mail_types),
                relevant_dielary: ensureArray(user.relevant_dielary),
                helgth_goal: ensureSingleString(user.helgth_goal),
            });
        }
    }, [user, form]);

    const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();

    const onSubmit = async (data, event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone_number", data.phone);
        formData.append("country_name", data.country_name);
        formData.append("country_code", data.country_code);

        if (data.dateOfBirth) {
            formData.append("date_of_birth", format(new Date(data.dateOfBirth), "yyyy-MM-dd"));
        }

        if (data.mail_types && Array.isArray(data.mail_types)) {
            formData.append('mail_types', JSON.stringify(data.mail_types));
        }

        if (data.relevant_dielary && Array.isArray(data.relevant_dielary)) {
            formData.append('relevant_dielary', JSON.stringify(data.relevant_dielary));
        }

        if (data.helgth_goal) {
            formData.append('helgth_goal', data.helgth_goal);
        }

        if (newProfileImage) {
            formData.append('profile_image', newProfileImage);
        }

        try {
            await updateUserProfile(formData).unwrap();
            SuccessToast("Profile updated successfully");
        } catch (error) {
            ErrorToast("Error updating profile");
            console.log(error);
        }
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
                                            <Input placeholder="eg: John Doe" {...field} />
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
                                            <Input disabled {...field} />
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
                                        <div className="flex gap-2">
                                            <Select
                                                onValueChange={(value) => {
                                                    const country = countries.find(c => c.code === value);
                                                    if (country) {
                                                        form.setValue("country_name", country.code);
                                                        form.setValue("country_code", country.callingCode);
                                                    }
                                                }}
                                                value={form.watch("country_name")}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="w-[100px] shrink-0">
                                                        <SelectValue placeholder="Code" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="max-h-[300px]">
                                                    {countries.map((country) => (
                                                        <SelectItem key={country.code} value={country.code}>
                                                            <span className="flex items-center gap-2">
                                                                <span>{country.code}</span>
                                                                <span className="text-muted-foreground">{country.callingCode}</span>
                                                            </span>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormControl>
                                                <Input className="flex-1" placeholder="eg: 0123456789" {...field} />
                                            </FormControl>
                                        </div>
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
                                                    className="rounded-md border shadow-sm"
                                                    captionLayout="dropdown"
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    defaultMonth={field.value || new Date()}
                                                    fromYear={1900}
                                                    toYear={new Date().getFullYear()}
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
                                <FormItem className="space-y-3">
                                    <FormLabel>Health Goal</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border rounded-md"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="weight_loss" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Weight Loss</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="muscle_gain" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Muscle Gain</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="maintain_weight" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Maintain Weight</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
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
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('breakfast')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        let newValues;
                                                        if (checked) {
                                                            const withoutNone = currentValues.filter(v => v !== 'none');
                                                            newValues = [...withoutNone, 'breakfast'];
                                                        } else {
                                                            newValues = currentValues.filter((value) => value !== 'breakfast');
                                                        }
                                                        field.onChange(newValues);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Breakfast</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('lunches-and-dinners')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        let newValues;
                                                        if (checked) {
                                                            const withoutNone = currentValues.filter(v => v !== 'none');
                                                            newValues = [...withoutNone, 'lunches-and-dinners'];
                                                        } else {
                                                            newValues = currentValues.filter((value) => value !== 'lunches-and-dinners');
                                                        }
                                                        field.onChange(newValues);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Lunches and Dinners</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('appetizers')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        let newValues;
                                                        if (checked) {
                                                            const withoutNone = currentValues.filter(v => v !== 'none');
                                                            newValues = [...withoutNone, 'appetizers'];
                                                        } else {
                                                            newValues = currentValues.filter((value) => value !== 'appetizers');
                                                        }
                                                        field.onChange(newValues);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Appetizers</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('salads')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        let newValues;
                                                        if (checked) {
                                                            const withoutNone = currentValues.filter(v => v !== 'none');
                                                            newValues = [...withoutNone, 'salads'];
                                                        } else {
                                                            newValues = currentValues.filter((value) => value !== 'salads');
                                                        }
                                                        field.onChange(newValues);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Salads</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('soups')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        let newValues;
                                                        if (checked) {
                                                            const withoutNone = currentValues.filter(v => v !== 'none');
                                                            newValues = [...withoutNone, 'soups'];
                                                        } else {
                                                            newValues = currentValues.filter((value) => value !== 'soups');
                                                        }
                                                        field.onChange(newValues);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Soups</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('desserts')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        let newValues;
                                                        if (checked) {
                                                            const withoutNone = currentValues.filter(v => v !== 'none');
                                                            newValues = [...withoutNone, 'desserts'];
                                                        } else {
                                                            newValues = currentValues.filter((value) => value !== 'desserts');
                                                        }
                                                        field.onChange(newValues);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Desserts</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('smoothies/shakes')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        let newValues;
                                                        if (checked) {
                                                            const withoutNone = currentValues.filter(v => v !== 'none');
                                                            newValues = [...withoutNone, 'smoothies/shakes'];
                                                        } else {
                                                            newValues = currentValues.filter((value) => value !== 'smoothies/shakes');
                                                        }
                                                        field.onChange(newValues);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Smoothies/Shakes</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('salad-dressings')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        let newValues;
                                                        if (checked) {
                                                            const withoutNone = currentValues.filter(v => v !== 'none');
                                                            newValues = [...withoutNone, 'salad-dressings'];
                                                        } else {
                                                            newValues = currentValues.filter((value) => value !== 'salad-dressings');
                                                        }
                                                        field.onChange(newValues);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Salad Dressings</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('jams/marmalades')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        let newValues;
                                                        if (checked) {
                                                            const withoutNone = currentValues.filter(v => v !== 'none');
                                                            newValues = [...withoutNone, 'jams/marmalades'];
                                                        } else {
                                                            newValues = currentValues.filter((value) => value !== 'jams/marmalades');
                                                        }
                                                        field.onChange(newValues);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Jams/Marmalades</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('sides')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        let newValues;
                                                        if (checked) {
                                                            const withoutNone = currentValues.filter(v => v !== 'none');
                                                            newValues = [...withoutNone, 'sides'];
                                                        } else {
                                                            newValues = currentValues.filter((value) => value !== 'sides');
                                                        }
                                                        field.onChange(newValues);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Sides</FormLabel>
                                        </div>
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
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('Gluten-Free')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        return checked
                                                            ? field.onChange([...currentValues, 'Gluten-Free'])
                                                            : field.onChange(currentValues.filter((value) => value !== 'Gluten-Free'));
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Gluten-Free</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('Vegan')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        return checked
                                                            ? field.onChange([...currentValues, 'Vegan'])
                                                            : field.onChange(currentValues.filter((value) => value !== 'Vegan'));
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Vegan</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('Vegetarian')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        return checked
                                                            ? field.onChange([...currentValues, 'Vegetarian'])
                                                            : field.onChange(currentValues.filter((value) => value !== 'Vegetarian'));
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Vegetarian</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('Keto')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        return checked
                                                            ? field.onChange([...currentValues, 'Keto'])
                                                            : field.onChange(currentValues.filter((value) => value !== 'Keto'));
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Keto</FormLabel>
                                        </div>
                                        <div className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes('Paleo')}
                                                    onCheckedChange={(checked) => {
                                                        const currentValues = field.value || [];
                                                        return checked
                                                            ? field.onChange([...currentValues, 'Paleo'])
                                                            : field.onChange(currentValues.filter((value) => value !== 'Paleo'));
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className="font-normal capitalize">Paleo</FormLabel>
                                        </div>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end">
                            <Button loading={isLoading} type="submit">Save Changes</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default EditAccount;