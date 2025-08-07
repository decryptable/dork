export interface SearchFilter {
  name: string;
  key: string;
  description: string;
  example: string;
  requiresValue: boolean;
  placeholder?: string;
}

export interface SearchOperator {
  name: string;
  symbol: string;
  description: string;
  example: string;
  type: 'logical' | 'modifier' | 'wildcard';
}

export interface DorkQuery {
  id: string;
  filters: Array<{
    filter: SearchFilter;
    value: string;
    enabled: boolean;
  }>;
  operators: Array<{
    operator: SearchOperator;
    position: number;
  }>;
  customText: string;
}

export interface ExampleDork {
  title: string;
  description: string;
  query: string;
  category: string;
}