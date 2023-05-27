import React from "react";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";

const brands = [
  {
    value: "asus",
    label: "Asus",
  },
  {
    value: "corsair",
    label: "Corsair",
  },
  {
    value: "endgame",
    label: "EndGame",
  },
  {
    value: "finalmouse",
    label: "Finalmouse",
  },
  {
    value: "glorious",
    label: "Glorious",
  },
  {
    value: "hyperx",
    label: "HyperX",
  },
  {
    value: "logitech",
    label: "Logitech",
  },
  {
    value: "razer",
    label: "Razer",
  },
  {
    value: "steelseries",
    label: "Steelseries",
  },

  {
    value: "xtrfy",
    label: "Xtrfy",
  },

  {
    value: "zowie",
    label: "Zowie",
  },
];

const BrandDropdown: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

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
            ? brands.find((brand) => brand.value === value)?.label
            : "Select brand..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search brand..." />
          <CommandEmpty>No brand found.</CommandEmpty>
          <CommandGroup>
            {brands.map((brand) => (
              <CommandItem
                key={brand.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === brand.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {brand.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default BrandDropdown;
