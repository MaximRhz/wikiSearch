import React from "react";
import styles from "./styles.module.css";

const SearchResult = props => {
  const { title, snippet, url } = props;

  return (
    <section className={styles.wrapper}>
      <a
        href={url}
        className={styles.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <div className={styles.snippet}>{snippet}</div>
      <a
        className={styles.url}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
      </a>
    </section>
  );
};

export default SearchResult;
