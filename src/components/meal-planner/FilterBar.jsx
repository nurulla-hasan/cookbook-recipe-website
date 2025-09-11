import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, MoreHorizontal, Trash2, RotateCcw, Eraser, Printer, Download, Save } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const FilterDropdown = ({ title, items }) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
                variant="ghost"
                className="flex items-center gap-2"
            >
                {title} <ChevronDown />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <ScrollArea className="h-48">
                {items.map((item) => (
                    <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
                ))}
            </ScrollArea>
        </DropdownMenuContent>
    </DropdownMenu>
);

const FilterBar = ({ weeklyPlans, simpleStarterPlans, preparations, menuOptions }) => {
    const customPlans = [
        "Day 1",
        "Next week",
    ];

    const iconMap = {
        "Reset Plan": <RotateCcw className="mr-2 h-4 w-4" />,
        "Clean Plan": <Eraser className="mr-2 h-4 w-4" />,
        "Print plan": <Printer className="mr-2 h-4 w-4" />,
        "Download plan": <Download className="mr-2 h-4 w-4" />,
        "Save as Custom Plan": <Save className="mr-2 h-4 w-4" />,
    };

    return (
        <div className="flex items-center justify-center gap-3 overflow-x-auto whitespace-nowrap">
            <FilterDropdown
                title="Weekly"
                items={weeklyPlans}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2"
                    >
                        Custom <ChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <ScrollArea className="h-48">
                        {customPlans.map((plan) => (
                            <DropdownMenuItem key={plan} className="flex justify-between items-center">
                                {plan} <Trash2 />
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuItem>
                            + CREATE CUSTOM PLAN
                        </DropdownMenuItem>
                    </ScrollArea>
                </DropdownMenuContent>
            </DropdownMenu>

            <FilterDropdown
                title="Simple Starter Plan"
                items={simpleStarterPlans}
            />
            <FilterDropdown
                title="Preparation"
                items={preparations}
            />

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="rounded-full" variant="outline" size="icon">
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