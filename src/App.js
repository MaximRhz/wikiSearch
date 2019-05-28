import SearchBar from "./components/SearchBar";
import React, { useState } from "react";
import SearchRusultsList from "./components/SearchResultsList";
import Logo from "./components/Logo";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const transformData = ({ title, snippet }) => ({
    title,
    snippet: snippet.replace(/<[^>]+>/g, ""),
    url: encodeURI(`https://ru.wikipedia.org/wiki/${title}`)
  });

  const makeRequest = async searchParameter => {
    if (searchParameter === "") return;
    let response;
    try {
      response = await fetch(
        `https://ru.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&origin=*&srlimit=20&sroffset=0&srsearch=${encodeURIComponent(
          searchParameter
        )}`
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
    if (json.query.searchinfo.totalhits === 0) {
      setError("Ничего не нашлось");
      return;
    }
    setError(null);
    setData(json.query.search.map(transformData));
  };
  const content =
    error === null ? (
      <SearchRusultsList data={data} />
    ) : (
      <ErrorComponent>{error}</ErrorComponent>
    );

  return (
    <>
      <Logo />
      <SearchBar onSearch={makeRequest} />
      {content}
    </>
  );
}

export default App;
