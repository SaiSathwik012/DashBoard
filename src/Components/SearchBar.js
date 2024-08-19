import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function SearchBar({ setSearchResults }) {
  const [query, setQuery] = useState('');
  const categories = useSelector(state => state.dashboard.categories);

  const handleSearch = (e) => {
    setQuery(e.target.value);

    const results = categories.reduce((acc, category) => {
      const filteredWidgets = category.widgets.filter(widget =>
        widget.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filteredWidgets.length > 0) {
        acc.push({ ...category, widgets: filteredWidgets });
      }
      return acc;
    }, []);

    setSearchResults(results);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search Widgets"
    />
  );
}

export default SearchBar;
