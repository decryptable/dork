import { useState } from 'react';
import { Copy, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

interface QueryDisplayProps {
  query: string;
}

export function QueryDisplay({ query }: QueryDisplayProps) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(query);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Query copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const searchGoogle = () => {
    if (query.trim()) {
      const encodedQuery = encodeURIComponent(query);
      window.open(`https://www.google.com/search?q=${encodedQuery}`, '_blank');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center justify-between">
          Generated Query
          <div className="flex gap-2">
            <Button
              onClick={copyToClipboard}
              size="sm"
              variant="outline"
              disabled={!query.trim()}
            >
              {copied ? (
                <CheckCircle className="h-4 w-4 mr-1" />
              ) : (
                <Copy className="h-4 w-4 mr-1" />
              )}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
            <Button
              onClick={searchGoogle}
              size="sm"
              disabled={!query.trim()}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Search Google
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={query}
          readOnly
          placeholder="Your generated Google dork will appear here..."
          className="min-h-20 font-mono text-sm resize-none"
        />
        {query && (
          <div className="mt-3 p-3 bg-muted rounded-md">
            <p className="text-sm text-muted-foreground mb-2">Preview:</p>
            <code className="text-sm break-all">{query}</code>
          </div>
        )}
      </CardContent>
    </Card>
  );
}