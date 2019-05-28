import React, { useState } from "react";
import styles from "./styles.module.css";
import { ReactComponent as Magnifier } from "./magnifier.svg";
import { useFocus } from "use-events";
import classNames from "classnames";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isFocused, bind] = useFocus();
  const searchBarClasses = classNames({
    [styles.searchBar]: true,
    [styles.searchBarFocused]: isFocused
  });
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={searchBarClasses}>
        <input
          {...bind}
          className={styles.searchInput}
          value={query}
          onChange={event => setQuery(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className={styles.magnifierButton}
          onClick={() => onSearch(query)}
        >
          <Magnifier className={styles.magnifierIcon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
