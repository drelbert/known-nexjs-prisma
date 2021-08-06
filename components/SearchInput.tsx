import React, {
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
  useContext,
} from "react";

import { SearchContext } from "./Search";

function SearchInput({ autoFocus }) {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(null);
  // subscribing this component to the provider
  const context = useContext(SearchContext);

  useLayoutEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
      setFocused(true);
    }
  }, [autoFocus]);

  useEffect(() => {
    function handleClick(event) {
      if (event.target === inputRef.current) {
        inputRef.current.focus();
        setFocused(true);
      } else {
        inputRef.current.blur();
        setFocused(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  function handleInputChange(event) {
    context.setInputValue(event.currentTarget.value);
  }

  const focusCn = focused ? "SearchInput focused" : "SearchInput";

  return (
    <div className={focusCn}>
      <input
        // hey, these are props
        onChange={handleInputChange}
        ref={inputRef}
        type="search"
        className="SearchInput__input"
      />
    </div>
  );
}

export default SearchInput;
