import { useState } from 'react';
import { motion } from 'framer-motion';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filters: FilterOptions) => void;
  placeholder?: string;
}

interface FilterOptions {
  eventType?: 'FOUR' | 'SIX' | 'WICKET' | '';
  dateRange?: 'today' | 'week' | 'month' | 'all';
  status?: 'processing' | 'completed' | 'failed' | '';
}

export const SearchFilter = ({ 
  onSearch, 
  onFilter, 
  placeholder = "Search videos..." 
}: SearchFilterProps) => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({});
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="fas fa-search text-white/40"></i>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-blue-400 focus:bg-white/10 focus:outline-none transition-all duration-300"
        />
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/60 hover:text-white transition-colors"
        >
          <i className="fas fa-filter"></i>
        </button>
      </div>

      {/* Filters */}
      <motion.div
        initial={false}
        animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="glass rounded-xl p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Event Type Filter */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Event Type
              </label>
              <select
                value={filters.eventType || ''}
                onChange={(e) => handleFilterChange('eventType', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:outline-none"
              >
                <option value="">All Events</option>
                <option value="FOUR">Fours</option>
                <option value="SIX">Sixes</option>
                <option value="WICKET">Wickets</option>
              </select>
            </div>

            {/* Date Range Filter */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Date Range
              </label>
              <select
                value={filters.dateRange || 'all'}
                onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:outline-none"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Status
              </label>
              <select
                value={filters.status || ''}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:outline-none"
              >
                <option value="">All Status</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setFilters({});
              onFilter({});
            }}
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            <i className="fas fa-times mr-1"></i>
            Clear Filters
          </button>
        </div>
      </motion.div>
    </div>
  );
};