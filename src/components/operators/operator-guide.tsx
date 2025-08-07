import { Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { searchOperators } from '@/data/operators';

export function OperatorGuide() {
  const groupedOperators = searchOperators.reduce((acc, operator) => {
    if (!acc[operator.type]) {
      acc[operator.type] = [];
    }
    acc[operator.type].push(operator);
    return acc;
  }, {} as Record<string, typeof searchOperators>);

  const typeColors = {
    logical: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    modifier: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    wildcard: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  };

  const typeLabels = {
    logical: 'Logical Operators',
    modifier: 'Modifiers',
    wildcard: 'Wildcards'
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5" />
          Search Operators Guide
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <AlertDescription>
            Use these operators to combine and modify your search terms for more precise results.
          </AlertDescription>
        </Alert>
        
        {Object.entries(groupedOperators).map(([type, operators]) => (
          <div key={type} className="space-y-3">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <Badge variant="secondary" className={typeColors[type as keyof typeof typeColors]}>
                {typeLabels[type as keyof typeof typeLabels]}
              </Badge>
            </h3>
            <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2">
              {operators.map((operator) => (
                <div key={operator.name} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{operator.name}</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                      {operator.symbol}
                    </code>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {operator.description}
                  </p>
                  <code className="text-xs bg-primary/10 text-primary px-2 py-1 rounded block font-mono">
                    {operator.example}
                  </code>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}