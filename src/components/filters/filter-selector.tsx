import { useState } from 'react';
import { Plus, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { searchFilters } from '@/data/filters';
import type { SearchFilter } from '@/types';

interface FilterSelectorProps {
  onFilterSelect: (filter: SearchFilter) => void;
}

export function FilterSelector({ onFilterSelect }: FilterSelectorProps) {
  const [open, setOpen] = useState(false);
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <Command>
          <CommandInput placeholder="Search filters..." />
          <CommandList>
            <CommandEmpty>No filters found.</CommandEmpty>
            <CommandGroup>
              {searchFilters.map((filter) => (
                <CommandItem
                  key={filter.key}
                  value={filter.name}
                  onSelect={() => {
                    onFilterSelect(filter);
                    setOpen(false);
                  }}
                  className="flex flex-col items-start p-4"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">{filter.name}</span>
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">
                      {filter.example}
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {filter.description}
                  </p>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}