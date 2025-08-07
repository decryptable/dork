import { useState, useCallback, useMemo } from 'react';
import type { SearchFilter } from '@/types';
import { generateId } from '@/lib/utils';

interface FilterInstance {
  id: string;
  filter: SearchFilter;
  value: string;
  enabled: boolean;
}

export function useDorkBuilder() {
  const [filters, setFilters] = useState<FilterInstance[]>([]);
  const [customText, setCustomText] = useState('');

  const addFilter = useCallback((filter: SearchFilter) => {
    const newFilter: FilterInstance = {
      id: generateId(),
      filter,
      value: '',
      enabled: true
    };
    setFilters(prev => [...prev, newFilter]);
  }, []);

  const updateFilter = useCallback((id: string, updates: Partial<FilterInstance>) => {
    setFilters(prev => prev.map(f => 
      f.id === id ? { ...f, ...updates } : f
    ));
  }, []);

  const removeFilter = useCallback((id: string) => {
    setFilters(prev => prev.filter(f => f.id !== id));
  }, []);

  const toggleFilter = useCallback((id: string) => {
    setFilters(prev => prev.map(f => 
      f.id === id ? { ...f, enabled: !f.enabled } : f
    ));
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters([]);
    setCustomText('');
  }, []);

  const generatedQuery = useMemo(() => {
    const activeFilters = filters.filter(f => f.enabled && f.value.trim());
    const filterQueries = activeFilters.map(f => {
      const value = f.value.includes(' ') && !f.value.startsWith('"') 
        ? `"${f.value}"` 
        : f.value;
      return `${f.filter.key}:${value}`;
    });

    const allParts = [...filterQueries];
    if (customText.trim()) {
      allParts.push(customText.trim());
    }

    return allParts.join(' ');
  }, [filters, customText]);

  return {
    filters,
    customText,
    generatedQuery,
    addFilter,
    updateFilter,
    removeFilter,
    toggleFilter,
    clearAllFilters,
    setCustomText
  };
}