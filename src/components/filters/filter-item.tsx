import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import type { SearchFilter } from '@/types'
import { X } from 'lucide-react'

interface FilterItemProps {
  id: string;
  filter: SearchFilter;
  value: string;
  enabled: boolean;
  onValueChange: (value: string) => void;
  onToggle: () => void;
  onRemove: () => void;
}

export function FilterItem({
  filter,
  value,
  enabled,
  onValueChange,
  onToggle,
  onRemove,
}: FilterItemProps) {
  return (
    <Card className={`transition-opacity ${enabled ? 'opacity-100' : 'opacity-60'}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Switch checked={enabled} onCheckedChange={onToggle} />
            <div>
              <Label className="font-medium text-sm">{filter.name}</Label>
              <p className="text-xs text-muted-foreground">
                {filter.description}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onRemove}
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
          >
            <X className="h-4 w-4"/>
          </Button>
        </div>
        
        <div className="space-y-2">
          <Input
            placeholder={filter.placeholder}
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            disabled={!enabled}
            className="text-sm"
          />
          <div className="flex items-center justify-between">
            <code className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
              {filter.example}
            </code>
            {value && (
              <code className="text-xs bg-primary/10 px-2 py-1 rounded text-primary font-mono">
                {filter.key}:{value.includes(' ') && !value.startsWith('"') ? `"${value}"` : value}
              </code>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}