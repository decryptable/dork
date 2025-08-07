import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Type } from 'lucide-react'

interface CustomTextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function CustomTextInput({ value, onChange }: CustomTextInputProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Type className="h-5 w-5" />
          Custom Search Text
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor="custom-text" className="text-sm font-medium">
            Additional search terms
          </Label>
          <Textarea
            id="custom-text"
            placeholder='Add custom search terms, operators, or combinations...'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-20 resize-none"
          />
          <p className="text-xs text-muted-foreground">
            Use operators like AND, OR, quotes for exact phrases, or any combination of search terms.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}