import type { ExampleDork } from '@/types';

export const exampleDorks: ExampleDork[] = [
  {
    title: 'Find Directory Listings',
    description: 'Search for open directory listings containing files',
    query: 'intitle:"index of /" "parent directory"',
    category: 'File Discovery'
  },
  {
    title: 'Find Specific File Types',
    description: 'Search for PDF documents with specific content',
    query: 'filetype:pdf "confidential" site:*.edu',
    category: 'Document Search'
  },
  {
    title: 'Login Pages',
    description: 'Find login pages on specific domains',
    query: '(site:facebook.com | site:twitter.com) intext:"login"',
    category: 'Security Research'
  },
  {
    title: 'Configuration Files',
    description: 'Find exposed configuration files',
    query: 'filetype:config inurl:web.config',
    category: 'Security Research'
  },
  {
    title: 'Music Files',
    description: 'Find MP3 files in open directories',
    query: 'parent directory MP3 -html -htm -php -shtml',
    category: 'File Discovery'
  },
  {
    title: 'Sensitive Documents',
    description: 'Find documents containing sensitive information',
    query: 'ext:(doc | pdf | xls | txt) intext:"confidential salary"',
    category: 'Document Search'
  },
  {
    title: 'Windows Product Keys',
    description: 'Find Windows product keys (for educational purposes)',
    query: '"Windows XP Professional" 94FBR',
    category: 'Educational'
  },
  {
    title: 'Date Range Search',
    description: 'Find PDF files within a specific date range',
    query: 'filetype:pdf (before:2000-01-01 after:1999-01-01)',
    category: 'Date-based Search'
  }
];