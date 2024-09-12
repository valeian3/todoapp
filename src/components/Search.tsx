import React, { useCallback } from "react";
import { useDebounce, useTodoContext } from "../lib/hooks";

function Search() {
  const { query, setQuery } = useTodoContext();

  const handleSearch = useDebounce(
    useCallback((searchTerm: string) => {
      if (searchTerm === "") return;
      // console.log("Searching for:", searchTerm);
    }, []),
    500
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
    handleSearch(value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        className="
          w-full px-4 py-2
          border border-gray-300 
          rounded-lg
          focus:outline-none 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          bg-white text-gray-900 
          dark:bg-gray-800 dark:text-gray-100 
          dark:border-gray-600
          dark:focus:ring-blue-300
        "
      />
    </>
  );
}

export default Search;
