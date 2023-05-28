import React from "react";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@ui/button";
import { Command, CommandGroup, CommandItem } from "@ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";

const shapes = [
  {
    value: "ergonomic",
    label: "Ergonomic",
  },
  {
    value: "ambidextrous",
    label: "Ambidextrous",
  },
];

interface Props {
  selected: {
    value?: string;
    onChange: (shape: string) => void;
  };
}

const ShapeDropdown: React.FC<Props> = ({ selected: { value, onChange } }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? shapes.find((option) => option.value === value)?.label
            : `Select shape...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {shapes.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={(currentValue) => {
                  onChange(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ShapeDropdown;
