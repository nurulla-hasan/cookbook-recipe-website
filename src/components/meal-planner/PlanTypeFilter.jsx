import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const PlanTypeFilter = ({ title, items, value, onValueChange }) => (
    <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="flex items-center gap-2">
            <SelectValue placeholder={title} />
        </SelectTrigger>

        <SelectContent>
            <div>
                {items.map((item) => (
                    <SelectItem key={item} value={item}>
                        {item}
                    </SelectItem>
                ))}
            </div>
        </SelectContent>
    </Select>
);

export default PlanTypeFilter;