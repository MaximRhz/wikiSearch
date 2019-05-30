import React from "react";
import SearchResult from "../SearchResult";

const SearchResultsList = props => {
  const { data } = props;

  return (
    <section>
      {data.map(({ title, snippet, url, key }) => (
        <SearchResult key={key} title={title} url={url} snippet={snippet} />
      ))}
    </section>
  );
};

export default SearchResultsList;
