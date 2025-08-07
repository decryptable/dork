import type { SearchOperator } from '@/types';

export const searchOperators: SearchOperator[] = [
  {
    name: 'OR',
    symbol: '|',
    description: 'Searches for either term A or term B.',
    example: 'site:facebook.com | site:twitter.com',
    type: 'logical'
  },
  {
    name: 'AND',
    symbol: '&',
    description: 'Searches for both term A and term B.',
    example: 'site:facebook.com & site:twitter.com',
    type: 'logical'
  },
  {
    name: 'Include',
    symbol: '+',
    description: 'Forces inclusion of a term in search results.',
    example: '+site:facebook.com',
    type: 'modifier'
  },
  {
    name: 'Exclude',
    symbol: '-',
    description: 'Excludes a term from search results.',
    example: '-site:facebook.com',
    type: 'modifier'
  },
  {
    name: 'Wildcard',
    symbol: '*',
    description: 'Represents any character or word.',
    example: 'site:*.com',
    type: 'wildcard'
  },
  {
    name: 'Synonyms',
    symbol: '~',
    description: 'Includes synonyms of the search term.',
    example: '~set',
    type: 'modifier'
  },
  {
    name: 'Exact Match',
    symbol: '""',
    description: 'Searches for the exact phrase within quotes.',
    example: '"exact phrase"',
    type: 'modifier'
  },
  {
    name: 'Parentheses',
    symbol: '()',
    description: 'Groups search terms together.',
    example: '(site:facebook.com | site:twitter.com)',
    type: 'logical'
  }
];