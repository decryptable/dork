import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Toaster } from '@/components/ui/toaster'
import { FileText, Search, Trash2 } from 'lucide-react'

import { CustomTextInput } from '@/components/custom-text/custom-text-input'
import { ExampleDorks } from '@/components/examples/example-dorks'
import { FilterItem } from '@/components/filters/filter-item'
import { FilterSelector } from '@/components/filters/filter-selector'
import { OperatorGuide } from '@/components/operators/operator-guide'
import { QueryDisplay } from '@/components/query/query-display'
import { ThemeToggle } from '@/components/theme/theme-toggle'

import { useDorkBuilder } from '@/hooks/use-dork-builder'
import { toast } from '@/hooks/use-toast'

function App() {
  const {
    filters,
    customText,
    generatedQuery,
    addFilter,
    updateFilter,
    removeFilter,
    toggleFilter,
    clearAllFilters,
    setCustomText
  } = useDorkBuilder();

  const activeFiltersCount = filters.filter(f => f.enabled).length;

  const handleUseExample = (query: string) => {
    // Clear existing filters and set custom text to the example query
    clearAllFilters();
    setCustomText(query);
    toast({
      title: "Example Applied",
      description: "Example query has been loaded",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Search className="h-8 w-8 text-primary" />
              Google Dork Generator
            </h1>
            <p className="text-muted-foreground mt-2">
              Build powerful Google search queries with ease
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - Builder */}
          <div className="xl:col-span-2 space-y-6">
            {/* Query Builder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Query Builder</span>
                  <div className="flex items-center gap-2">
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary">
                        {activeFiltersCount} active filter{activeFiltersCount !== 1 ? 's' : ''}
                      </Badge>
                    )}
                    {filters.length > 0 && (
                      <Button
                        onClick={clearAllFilters}
                        size="sm"
                        variant="outline"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Clear All
                      </Button>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <FilterSelector onFilterSelect={addFilter} />
                </div>
                
                {filters.length === 0 && !customText && (
                  <Alert>
                    <AlertDescription>
                      Add filters or enter custom search text to build your Google dork query.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Active Filters */}
                {filters.length > 0 && (
                  <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
                    {filters.map((filter) => (
                      <FilterItem
                        key={filter.id}
                        id={filter.id}
                        filter={filter.filter}
                        value={filter.value}
                        enabled={filter.enabled}
                        onValueChange={(value) => updateFilter(filter.id, { value })}
                        onToggle={() => toggleFilter(filter.id)}
                        onRemove={() => removeFilter(filter.id)}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Custom Text Input */}
            <CustomTextInput
              value={customText}
              onChange={setCustomText}
            />

            {/* Generated Query */}
            <QueryDisplay query={generatedQuery} />
          </div>

          {/* Right Column - Examples & Guide */}
          <div className="space-y-6">
            <Tabs defaultValue="examples" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="examples">
                  <FileText className="h-4 w-4 mr-2" />
                  Examples
                </TabsTrigger>
                <TabsTrigger value="guide">
                  <Search className="h-4 w-4 mr-2" />
                  Operators
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="examples" className="mt-4">
                <ExampleDorks onUseExample={handleUseExample} />
              </TabsContent>
              
              <TabsContent value="guide" className="mt-4">
                <OperatorGuide />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p className="text-sm">
            Love this tool? Give it a star on <a href='https://github.com/decryptable/dork' aria-label='github' className='text-blue-400' target='_blank'>
            GitHub
            </a>.
          </p>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default App;