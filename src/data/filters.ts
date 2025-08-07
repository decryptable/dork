import type { SearchFilter } from '@/types';

export const searchFilters: SearchFilter[] = [
  {
    name: 'allintext',
    key: 'allintext',
    description: 'Searches for occurrences of all the keywords given.',
    example: 'allintext:"keyword"',
    requiresValue: true,
    placeholder: 'Enter keywords...'
  },
  {
    name: 'intext',
    key: 'intext',
    description: 'Searches for the occurrences of keywords all at once or one at a time.',
    example: 'intext:"keyword"',
    requiresValue: true,
    placeholder: 'Enter keywords...'
  },
  {
    name: 'inurl',
    key: 'inurl',
    description: 'Searches for a URL matching one of the keywords.',
    example: 'inurl:"keyword"',
    requiresValue: true,
    placeholder: 'Enter URL pattern...'
  },
  {
    name: 'allinurl',
    key: 'allinurl',
    description: 'Searches for a URL matching all the keywords in the query.',
    example: 'allinurl:"keyword"',
    requiresValue: true,
    placeholder: 'Enter URL patterns...'
  },
  {
    name: 'intitle',
    key: 'intitle',
    description: 'Searches for occurrences of keywords in title all or one.',
    example: 'intitle:"keyword"',
    requiresValue: true,
    placeholder: 'Enter title keywords...'
  },
  {
    name: 'allintitle',
    key: 'allintitle',
    description: 'Searches for occurrences of keywords all at a time.',
    example: 'allintitle:"keyword"',
    requiresValue: true,
    placeholder: 'Enter title keywords...'
  },
  {
    name: 'site',
    key: 'site',
    description: 'Specifically searches that particular site and lists all the results for that site.',
    example: 'site:"www.google.com"',
    requiresValue: true,
    placeholder: 'Enter domain...'
  },
  {
    name: 'filetype',
    key: 'filetype',
    description: 'Searches for a particular filetype mentioned in the query.',
    example: 'filetype:"pdf"',
    requiresValue: true,
    placeholder: 'Enter file extension...'
  },
  {
    name: 'link',
    key: 'link',
    description: 'Searches for external links to pages.',
    example: 'link:"keyword"',
    requiresValue: true,
    placeholder: 'Enter link pattern...'
  },
  {
    name: 'numrange',
    key: 'numrange',
    description: 'Used to locate specific numbers in your searches.',
    example: 'numrange:321-325',
    requiresValue: true,
    placeholder: 'Enter range (e.g., 100-200)...'
  },
  {
    name: 'before',
    key: 'before',
    description: 'Used to search before a particular date.',
    example: 'before:2000-01-01',
    requiresValue: true,
    placeholder: 'Enter date (YYYY-MM-DD)...'
  },
  {
    name: 'after',
    key: 'after',
    description: 'Used to search after a particular date.',
    example: 'after:2001-01-01',
    requiresValue: true,
    placeholder: 'Enter date (YYYY-MM-DD)...'
  },
  {
    name: 'inanchor',
    key: 'inanchor',
    description: 'Shows sites which have the keyterms in links pointing to them.',
    example: 'inanchor:rat',
    requiresValue: true,
    placeholder: 'Enter anchor text...'
  },
  {
    name: 'allinanchor',
    key: 'allinanchor',
    description: 'Shows sites which have all the keyterms in links pointing to them.',
    example: 'allinanchor:"keyword"',
    requiresValue: true,
    placeholder: 'Enter anchor text...'
  },
  {
    name: 'related',
    key: 'related',
    description: 'List web pages that are "similar" to a specified web page.',
    example: 'related:www.google.com',
    requiresValue: true,
    placeholder: 'Enter website URL...'
  },
  {
    name: 'cache',
    key: 'cache',
    description: 'Shows the version of the web page that Google has in its cache.',
    example: 'cache:www.google.com',
    requiresValue: true,
    placeholder: 'Enter website URL...'
  }
];