import React, { useEffect, useState } from "react";

import SearchStarships from "./SearchStarships";
import { fetchApiData } from "../utils/apiResults";

type SearchProps = {
  value: React.ReactNode;
};

export const SearchContext = React.createContext("");

// component to track related data for the SearchStarships component
// passing that data to components using context
const Search = ({ value = {} }: SearchProps) => {
  // managing state
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState(value);

  // useEffect to fetch data
  // first argument is anonymouns function
  useEffect(() => {
    const filteredResults = fetchApiData(inputValue);
    setSearchResults(filteredResults);
    // second argument is the dependency array with one value
    // only runs when input value changes
  }, [inputValue]);

  return (
    <div>
      <SearchContext.Provider
        // the value prop object with two fields
        value={{
          results: searchResults,
          setInputValue: setInputValue,
        }}
      >
        <SearchStarships />
      </SearchContext.Provider>
    </div>
  );
};

export default Search;
