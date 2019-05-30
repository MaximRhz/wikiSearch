import React, { useState } from "react";
import styles from "./styles.module.css";
import { ReactComponent as Magnifier } from "./magnifier.svg";
import { useFocus } from "use-events";
import classNames from "classnames";

const SearchBar = ({ onSearch }) => {
  const [isFocused, bind] = useFocus();
  const [input, setInput] = useState("");
  const searchBarClasses = classNames({
    [styles.searchBar]: true,
    [styles.searchBarFocused]: isFocused
  });
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      onSearch(input);
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={searchBarClasses}>
        <input
          {...bind}
          className={styles.searchInput}
          value={input}
          onChange={event => setInput(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className={styles.magnifierButton}
          onClick={() => onSearch(input)}
        >
          <Magnifier className={styles.magnifierIcon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
