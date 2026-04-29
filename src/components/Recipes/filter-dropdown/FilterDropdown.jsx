import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const MultiSelectDropdown = ({ label, options, selected = [], onSelect }) => {
  const [open, setOpen] = useState(false);

  const toggleOption = (value) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    onSelect(newSelected);
  };

  const removeOption = (e, value) => {
    e.stopPropagation();
    onSelect(selected.filter((item) => item !== value));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className="flex min-h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer dark:bg-input/30 dark:hover:bg-input/50 shadow-xs transition-[color,box-shadow]"
          onClick={() => setOpen(!open)}
        >
          <div className="flex flex-wrap gap-1">
            {selected.length === 0 && (
              <span className="text-muted-foreground">{label}</span>
            )}
            {selected.map((value) => {
              const option = options.find((o) => o.value === value);
              return (
                <Badge
                  key={value}
                  variant="secondary"
                  className="rounded-sm px-2.5 py-0.5 font-normal h-6 text-xs hover:bg-secondary/80 transition-colors"
                >
                  {option?.label || value}
                  <button
                    className="ml-1.5 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary-foreground/10 p-0.5 transition-colors"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        removeOption(e, value);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={(e) => removeOption(e, value)}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground cursor-pointer" />
                  </button>
                </Badge>
              );
            })}
          </div>
          <ChevronDown className="h-4 w-4 opacity-50 shrink-0" />
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-(--radix-popover-trigger-width) min-w-(--radix-popover-trigger-width) p-0"
        align="start"
      >
        <div
          className="max-h-70 overflow-y-auto overflow-x-hidden overscroll-contain p-1 bg-popover text-popover-foreground rounded-md border shadow-md custom-scrollbar"
          onWheel={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-1">
            {options.map((option) => {
              const isSelected = selected.includes(option.value);
              return (
                <div
                  key={option.value}
                  className={cn(
                    "relative flex w-full select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 cursor-pointer",
                    isSelected && "bg-accent text-accent-foreground"
                  )}
                  onClick={() => toggleOption(option.value)}
                >
                  <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                    {isSelected && <Check className="h-4 w-4" />}
                  </span>
                  <span className="flex items-center gap-2 truncate">
                    {option.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const FilterDropdown = ({ label, options, onSelect, selected }) => {
  return (
    <Select onValueChange={onSelect} value={selected}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => {
          const value = typeof option === 'object' ? option.value : option;
          const label = typeof option === 'object' ? option.label : option;
          return (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export { MultiSelectDropdown };
export default FilterDropdown;
