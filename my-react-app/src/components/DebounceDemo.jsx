import { useState, useEffect } from 'react';

const DebounceDemo = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    }
  }, [query]);

  useEffect(() => {
    if (debounceQuery) {
      console.log(`Debounce query: ${debounceQuery}`);
    }
  }, [debounceQuery]);

  return (
    <div>
      <br />
      <span>Enter your search text Here: </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
    </div>

  );
}

export default DebounceDemo;
