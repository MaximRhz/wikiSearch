import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";
import SearchRusultsList from "./components/SearchResultsList";
import Logo from "./components/Logo";
import ErrorComponent from "./components/ErrorComponent";
import Pagination from "react-js-pagination";

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  const transformData = ({ title, snippet, pageid }) => ({
    title,
    snippet: snippet.replace(/<[^>]+>/g, ""),
    url: encodeURI(`https://ru.wikipedia.org/wiki/${title}`),
    key: pageid
  });

  const makeRequest = async () => {
    if (query === "") {
      setError(null);
      setSearchResults([]);
      setTotalHits(0);
      return;
    }

    let response;
    try {
      response = await fetch(
        `https://ru.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&origin=*&srlimit=20&sroffset=${(page -
          1) *
          20}&srsearch=${encodeURIComponent(query)}`
      );
    } catch (err) {
      setError("Сетевая ошибка");
      return;
    }
    if (!response.ok) {
      setError("Ошибка сервера");
      return;
    }
    const json = await response.json();
    const responseTotalHits = json.query.searchinfo.totalhits;
    setTotalHits(responseTotalHits);
    if (responseTotalHits === 0) {
      setError("Ничего не нашлось");
      return;
    }
    setError(null);
    setSearchResults(json.query.search.map(transformData));
  };

  const handleQueryChange = query => {
    setPage(1);
    setQuery(query);
  };

  useEffect(() => {
    makeRequest();
  }, [page, query]);

  const content =
    error === null ? (
      <SearchRusultsList data={searchResults} />
    ) : (
      <ErrorComponent>{error}</ErrorComponent>
    );

  const pagination =
    totalHits.length === 0 && error !== null ? (
      <></>
    ) : (
      <Pagination
        hideFirstLastPages
        hideNavigation
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={totalHits}
        pageRangeDisplayed={5}
        onChange={setPage}
      />
    );

  return (
    <>
      <Logo />
      <SearchBar onSearch={handleQueryChange} />
      {content}
      {pagination}
    </>
  );
}

export default App;
