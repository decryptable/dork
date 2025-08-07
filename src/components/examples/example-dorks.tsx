import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { exampleDorks } from '@/data/examples'
import { toast } from '@/hooks/use-toast'
import { ChevronDown, ChevronUp, Copy, ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface ExampleDorksProps {
  onUseExample: (query: string) => void;
}

export function ExampleDorks({ onUseExample }: ExampleDorksProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  
  const toggleItem = (title: string) => {
    setOpenItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const copyExample = async (query: string, title: string) => {
    try {
      await navigator.clipboard.writeText(query);
      toast({
        title: "Copied!",
        description: `"${title}" query copied to clipboard`,
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const searchExample = (query: string) => {
    const encodedQuery = encodeURIComponent(query);
    window.open(`https://www.google.com/search?q=${encodedQuery}`, '_blank');
  };

  const groupedExamples = exampleDorks.reduce((acc, example) => {
    if (!acc[example.category]) {
      acc[example.category] = [];
    }
    acc[example.category].push(example);
    return acc;
  }, {} as Record<string, typeof exampleDorks>);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Dorks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(groupedExamples).map(([category, examples]) => (
          <div key={category} className="space-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              {category}
            </h3>
            {examples.map((example) => (
              <Collapsible key={example.title}>
                <div className="border rounded-lg p-3">
                  <CollapsibleTrigger
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => toggleItem(example.title)}
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{example.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {example.description}
                      </p>
                    </div>
                    {openItems.includes(example.title) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="mt-3 pt-3 border-t">
                    <div className="space-y-3">
                      <code className="block p-3 bg-muted rounded-md text-xs font-mono break-all">
                        {example.query}
                      </code>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          onClick={() => onUseExample(example.query)}
                          size="sm"
                          variant="outline"
                          className="text-xs"
                        >
                          Use This Query
                        </Button>
                        <Button
                          onClick={() => copyExample(example.query, example.title)}
                          size="sm"
                          variant="outline"
                          className="text-xs"
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
                        </Button>
                        <Button
                          onClick={() => searchExample(example.query)}
                          size="sm"
                          variant="outline"
                          className="text-xs"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Search
                        </Button>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}