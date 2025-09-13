import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoreHorizontal, RotateCcw, Eraser, Printer, Download, Save } from "lucide-react";

const SelectFilter = ({ title, items, value, onValueChange }) => (
    <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="flex items-center gap-2 w-full md:w-[200px]">
            <SelectValue placeholder={title} />
        </SelectTrigger>
        <SelectContent>
            <ScrollArea className="h-48">
                {items.map((item) => (
                    <SelectItem key={item} value={item}>
                        {item}
                    </SelectItem>
                ))}
            </ScrollArea>
        </SelectContent>
    </Select>
);

const FilterBar = ({ 
    activeTab,
    setActiveTab,
    weeklyPlans, 
    simpleStarterPlans, 
    preparations, 
    menuOptions,
    selectedWeek,
    setSelectedWeek,
    selectedPlan,
    setSelectedPlan,
    selectedCustomPlan,
    setSelectedCustomPlan,
    selectedPreparation,
    setSelectedPreparation
}) => {
    // Simplified custom plans for Select component
    const customPlans = [
        "My Custom Mean Plan",
        "Day 1",
        "Next week",
        "Whole Harvest Meals",
    ];

    const iconMap = {
        "Reset Plan": <RotateCcw className="mr-2 h-4 w-4" />,
        "Clean Plan": <Eraser className="mr-2 h-4 w-4" />,
        "Print plan": <Printer className="mr-2 h-4 w-4" />,
        "Download plan": <Download className="mr-2 h-4 w-4" />,
        "Save as Custom Plan": <Save className="mr-2 h-4 w-4" />,
    };

    return (
        <div className="w-full">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="my-weeks">My Weeks</TabsTrigger>
                    <TabsTrigger value="starter-plans">Starter Plans</TabsTrigger>
                    <TabsTrigger value="custom-plans">Custom Plans</TabsTrigger>
                </TabsList>
                <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4">
                    <TabsContent value="my-weeks" className="w-full m-0">
                        <SelectFilter
                            title="Select Week"
                            items={weeklyPlans}
                            value={selectedWeek}
                            onValueChange={setSelectedWeek}
                        />
                    </TabsContent>
                    <TabsContent value="starter-plans" className="w-full m-0">
                        <SelectFilter
                            title="Select Starter Plan"
                            items={simpleStarterPlans}
                            value={selectedPlan}
                            onValueChange={setSelectedPlan}
                        />
                    </TabsContent>
                    <TabsContent value="custom-plans" className="w-full m-0">
                        <SelectFilter
                            title="Select Custom Plan"
                            items={customPlans}
                            value={selectedCustomPlan}
                            onValueChange={setSelectedCustomPlan}
                        />
                    </TabsContent>

                    <div className="flex items-center gap-4">
                        <SelectFilter
                            title="Preparation"
                            items={preparations}
                            value={selectedPreparation}
                            onValueChange={setSelectedPreparation}
                        />

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <MoreHorizontal />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <ScrollArea className="h-48">
                                    {menuOptions.map((item) => (
                                        <DropdownMenuItem key={item} className="flex items-center">
                                            {iconMap[item]}
                                            {item}
                                        </DropdownMenuItem>
                                    ))}
                                </ScrollArea>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </Tabs>
        </div>
    );
};

export default FilterBar;