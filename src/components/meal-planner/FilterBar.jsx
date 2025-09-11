import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, RotateCcw, Eraser, Printer, Download, Save } from "lucide-react";

const SelectFilter = ({ title, items, value, onValueChange }) => (
    <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="flex items-center gap-2">
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

const FilterBar = ({ weeklyPlans, simpleStarterPlans, preparations, menuOptions }) => {
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

    const [selectedWeeklyPlan, setSelectedWeeklyPlan] = useState(undefined);
    const [selectedCustomPlan, setSelectedCustomPlan] = useState(undefined);
    const [selectedSimpleStarterPlan, setSelectedSimpleStarterPlan] = useState(undefined);
    const [selectedPreparation, setSelectedPreparation] = useState(undefined);

    return (
        <div className="flex items-center justify-center gap-6">
                <SelectFilter
                    title="Weekly"
                    items={weeklyPlans}
                    value={selectedWeeklyPlan}
                    onValueChange={setSelectedWeeklyPlan}
                />
                <SelectFilter
                    title="Custom"
                    items={customPlans}
                    value={selectedCustomPlan}
                    onValueChange={setSelectedCustomPlan}
                />
                <SelectFilter
                    title="Featured"
                    items={simpleStarterPlans}
                    value={selectedSimpleStarterPlan}
                    onValueChange={setSelectedSimpleStarterPlan}
                />
                <SelectFilter
                    title="Preparation"
                    items={preparations}
                    value={selectedPreparation}
                    onValueChange={setSelectedPreparation}
                />

            {/* Right-side menu */} 
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
    );
};

export default FilterBar;