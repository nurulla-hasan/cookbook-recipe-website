import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoreHorizontal, RotateCcw, Eraser, Printer, Download, Save } from "lucide-react";
import PlanTypeFilter from "./PlanTypeFilter";

const GlobalMenu = ({
    preparations,
    menuOptions,
    selectedPreparation,
    setSelectedPreparation,
}) => {
    const iconMap = {
        "Reset Plan": <RotateCcw className="mr-2 h-4 w-4" />,
        "Clean Plan": <Eraser className="mr-2 h-4 w-4" />,
        "Print plan": <Printer className="mr-2 h-4 w-4" />,
        "Download plan": <Download className="mr-2 h-4 w-4" />,
        "Save as Custom Plan": <Save className="mr-2 h-4 w-4" />,
    };

    return (
        <div className="flex items-center gap-4">
            <PlanTypeFilter
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
    );
};

export default GlobalMenu;